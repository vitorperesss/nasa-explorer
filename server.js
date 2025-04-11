const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.use('/apod', require('./routes/apod'));
app.use('/mars', require('./routes/mars'));
app.use('/asteroids', require('./routes/asteroids'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));
