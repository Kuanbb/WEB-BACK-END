const express = require("express")
const app = express()
const connection = require('./database/database.js')
const controller = require('./controller/controllerBike')

connection.authenticate()
.then(()=>{
    console.log('Conectado ao SGBD')
}).catch((err)=>{
    console.log(err)
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use('/', controller)

app.get('/', (req, res)=>{
  
})

app.listen(8080 ,(err)=>{
    if(err){
        console.log("Algo deu errado!")
    }else{
        console.log("Servidor on-line!")
    }
})