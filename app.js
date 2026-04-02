require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

const contactoRoutes = require('./src/routes/contacto.routes');

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, 'public')));

// RUTAS API
app.use('/api/contacto', contactoRoutes);

// INICIO SERVIDOR
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});