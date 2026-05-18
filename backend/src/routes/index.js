const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
const portfolioController = require('../controllers/portfolioController');
const contactController = require('../controllers/contactController');
const pool = require('../config/db');

// Health check endpoint
router.get('/health', async (req, res) => {
  try {
    const client = await pool.connect();
    await client.query('SELECT 1');
    client.release();

    res.status(200).json({
      status: 'healthy',
      service: 'toba-mas-backend',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('Health check failed:', err.message);
    res.status(503).json({
      status: 'unhealthy',
      service: 'toba-mas-backend',
      database: 'disconnected',
      error: err.message,
      timestamp: new Date().toISOString()
    });
  }
});

// API Routes
router.get('/api/about', aboutController.getAbout);
router.get('/api/portfolio', portfolioController.getAllPortfolios);
router.get('/api/portfolio/:id', portfolioController.getPortfolioById);
router.get('/api/contact', contactController.getContact);

module.exports = router;
