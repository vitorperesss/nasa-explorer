const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const endDate = req.query.end || today;

  try {
    const { data } = await axios.get('https://api.nasa.gov/neo/rest/v1/feed', {
      params: {
        start_date: today,
        end_date: endDate,
        api_key: process.env.NASA_API_KEY,
      },
    });

    const asteroids = Object.values(data.near_earth_objects).flat().map((asteroid) => ({
      name: asteroid.name,
      distance_km: parseFloat(asteroid.close_approach_data[0]?.miss_distance.kilometers),
      velocity_kmh: parseFloat(asteroid.close_approach_data[0]?.relative_velocity.kilometers_per_hour),
      diameter_m: (asteroid.estimated_diameter.meters.estimated_diameter_max).toFixed(2),
    }));

    res.json(asteroids);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar asteroides próximos da Terra' });
  }
});

module.exports = router;
