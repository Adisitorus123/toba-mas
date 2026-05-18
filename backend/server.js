require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const pool = require('./src/config/db');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Auto-migration function
async function runMigration() {
  try {
    console.log('🔄 Checking database tables...');
    
    // Check if tables exist by querying about_company
    const checkResult = await pool.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'about_company'
      )
    `);
    
    const tablesExist = checkResult.rows[0].exists;
    
    if (!tablesExist) {
      console.log('📦 Tables not found. Running migration...');
      
      // Read and execute migration SQL
      const migrationPath = path.join(__dirname, 'src', 'migrations', '001_init.sql');
      const sql = fs.readFileSync(migrationPath, 'utf8');
      
      await pool.query(sql);
      console.log('✅ Migration completed successfully!');
      
      // Verify data
      const aboutResult = await pool.query('SELECT COUNT(*) FROM about_company');
      const portfolioResult = await pool.query('SELECT COUNT(*) FROM portfolios');
      const contactResult = await pool.query('SELECT COUNT(*) FROM contact_settings');
      
      console.log(`   📊 Data initialized:`);
      console.log(`      - about_company: ${aboutResult.rows[0].count} rows`);
      console.log(`      - portfolios: ${portfolioResult.rows[0].count} rows`);
      console.log(`      - contact_settings: ${contactResult.rows[0].count} rows`);
    } else {
      console.log('✅ Database tables already exist. Skipping migration.');
    }
  } catch (err) {
    console.error('❌ Migration failed:', err.message);
    // Don't exit - let the app continue even if migration fails
    // The health check endpoint will show database status
  }
}

// CORS Configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: false
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/', routes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.path,
    timestamp: new Date().toISOString()
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    timestamp: new Date().toISOString()
  });
});

// Start server after migration
async function startServer() {
  await runMigration();
  
  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Toba Mas Backend listening on port ${port}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'production'}`);
    console.log(`🗄️  Database: ${process.env.DB_HOST || 'not configured'}`);
  });

  // Graceful shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
}

startServer();
