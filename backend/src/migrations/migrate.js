const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: process.env.DB_SSL === 'false' ? false : { rejectUnauthorized: false },
});

async function migrate() {
  try {
    const sql = fs.readFileSync('/tmp/001_init.sql', 'utf8');
    const client = await pool.connect();
    try {
      await client.query(sql);
      console.log('✅ Migration berhasil!');
      
      // Verify data
      const aboutResult = await client.query('SELECT COUNT(*) FROM about_company');
      const portfolioResult = await client.query('SELECT COUNT(*) FROM portfolios');
      const contactResult = await client.query('SELECT COUNT(*) FROM contact_settings');
      
      console.log(`   about_company: ${aboutResult.rows[0].count} rows`);
      console.log(`   portfolios: ${portfolioResult.rows[0].count} rows`);
      console.log(`   contact_settings: ${contactResult.rows[0].count} rows`);
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('❌ Migration gagal:', err.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

migrate();
