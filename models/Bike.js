const Sequelize =  require('sequelize')
const connection = require('../database/database')

const Bike = connection.define('bike', {
    modelo : {
        type : Sequelize.STRING(10),
        allowNull: false
    },
    marca : {
        type : Sequelize.STRING(10),
        allowNull: false
    },
    preco : {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

module.exports = Bike