const pool = require('../config/db');

const getAbout = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM about_company LIMIT 1');
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Company profile not found' });
    }
    res.status(200).json({
      success: true,
      data: result.rows[0]
    });
  } catch (err) {
    console.error('Error fetching about:', err.message);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch company profile',
      details: err.message
    });
  }
};

module.exports = { getAbout };
