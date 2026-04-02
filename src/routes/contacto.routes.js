const express = require('express');
const router = express.Router();

const Contacto = require('../models/contacto');
const sequelize = require('../config/db');

// crear tabla si no existe
sequelize.sync();

router.post('/', async (req, res) => {
    try {
        const { nombre, correo, mensaje } = req.body;

        await Contacto.create({
            nombre,
            correo,
            mensaje
        });

        res.json({ mensaje: "Mensaje guardado correctamente" });

    } catch (error) {
        res.status(500).json({ error: "Error al guardar" });
    }
});

module.exports = router;