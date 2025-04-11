const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`https://api.nasa.gov/planetary/apod`, {
      params: {
        api_key: process.env.NASA_API_KEY
      }
    });
    res.json(response.data);
    console.log(res);
  } catch (error) {
    console.error('Erro ao buscar APOD:', error);
    res.status(500).json({ error: 'Erro ao buscar APOD' });
  }
});

module.exports = router;
