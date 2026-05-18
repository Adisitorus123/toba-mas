const pool = require('../config/db');

const getContact = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT key, value, description FROM contact_settings ORDER BY id'
    );
    const contact = {};
    result.rows.forEach(row => {
      contact[row.key] = {
        value: row.value,
        description: row.description
      };
    });
    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (err) {
    console.error('Error fetching contact:', err.message);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact settings',
      details: err.message
    });
  }
};

module.exports = { getContact };
