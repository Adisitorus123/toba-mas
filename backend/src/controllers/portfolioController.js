const pool = require('../config/db');

const getAllPortfolios = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM portfolios ORDER BY category, id'
    );
    res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows
    });
  } catch (err) {
    console.error('Error fetching portfolios:', err.message);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch portfolios',
      details: err.message
    });
  }
};

const getPortfolioById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM portfolios WHERE id = $1',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Portfolio not found'
      });
    }
    res.status(200).json({
      success: true,
      data: result.rows[0]
    });
  } catch (err) {
    console.error('Error fetching portfolio:', err.message);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch portfolio',
      details: err.message
    });
  }
};

module.exports = { getAllPortfolios, getPortfolioById };
