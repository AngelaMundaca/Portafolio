const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Contacto = sequelize.define('Contacto', {
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    mensaje: {
        type: DataTypes.TEXT
    }
});

module.exports = Contacto;