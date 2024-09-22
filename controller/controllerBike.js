const express = require('express')
const router = express.Router()
const Bike = require('../models/Bike')

router.get("/cadBicicleta", (req, res)=>{
    res.render('Cyclizar')
})

router.post('/magrelas/addBike', (req,res)=>{
    Bike.create({
        modelo : req.body.modelo,
        marca : req.body.marca,
        preco : req.body.preco
    })
    .then(()=>{
        console.log('Cadastrado')
        res.redirect('/magrelas/pesquisar')
    }).catch((err)=>{
        console.log(err)
        res.redirect('/')
    })
})

router.get('/magrelas/pesquisar', (req, res)=>{
    Bike.findAll()
    .then((magrelas)=>{
        res.render('tabbicicleta', {magrelas:magrelas})
    })
})

router.get('/magrelas/Alt/:id', (req, res)=>{
    var id = req.params.id
    Bike.findByPk(id)
    .then((magrelas)=>{
        res.render('EditarBike', {magrelas: magrelas})
    })
})

router.post('/magrelas/update', (req, res)=>{
    Bike.update({
        modelo : req.body.modelo,
        marca : req.body.marca,
        preco : req.body.preco
    },{where: {
        id:req.body.id
    }})
    .then(()=>{
        console.log('cadastrado')
    }).catch((err)=>{
        console.log('Erro: '+err)
    }).finally(()=>{
        res.redirect('/magrelas/pesquisar')
    })
})

router.get('/magrelas/delete/:id', (req, res)=>{
    var id = req.params.id
    Bike.destroy({
        where: {id:id}
    }).then(()=>{
        console.log('Deletado')
    }).catch((err)=>{
        console.log('Erro: '+err)
    }).finally(()=>{
        res.redirect('/magrelas/pesquisar')
    })
})

module.exports = router