const express = require("express")
const body_parser = require('body-parser')
const cors = require('cors')
    //const res = require('express/lib/response')
const app = express()

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())
app.use(cors());

const db_manager = require('./persistence/dbmanager')

///////////////////////////////////////////////CRUD//////////////////////////////////////////
/////////////////////////////////////////CREATE////////POST//////////////////////////////////
app.post('/producto', (req, res) => {
    db_manager.producto_create(req, res)
})

/////////////////////////////////////////READ////////GET//////////////////////////////////
app.get('/producto', (req, res) => {
    db_manager.producto_read(req, res)
})

/////////////////////////////////////////UPDATE////////PUT//////////////////////////////////
app.put('/producto', (req, res) => {
    db_manager.producto_update(req, res)
})

/////////////////////////////////////////DELETE////////DELETE//////////////////////////////////
app.delete('/producto', (req, res) => {
    db_manager.producto_delete(req, res)
})



app.listen(8985, () => (
    console.log("API REST is running  8985 ")
))