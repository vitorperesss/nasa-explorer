const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const sol = req.query.sol || 1000; // dia marciano
  const camera = req.query.camera;   // opcional
  const rover = req.query.rover || 'curiosity';

  const params = {
    sol,
    api_key: process.env.NASA_API_KEY,
  };

  if (camera) params.camera = camera;

  try {
    const { data } = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`,
      { params }
    );
    res.json(data.photos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar fotos de Marte' });
  }
});

module.exports = router;
