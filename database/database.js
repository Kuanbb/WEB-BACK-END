const Sequelize = require('sequelize')
const connection = new Sequelize('Bicicletas', 'postgres', '0000',{
    host : 'localhost',
    dialect : 'postgres'
})

module.exports = connection