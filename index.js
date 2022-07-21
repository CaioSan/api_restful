// config inicial
require('dotenv').config()

const express = require('express')
const app = express();
const mongoose = require('mongoose')
const PORT = 3000


//Forma de ler json
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Eai' })
})

const Person = require('./routes/personRoutes')
app.use('/person', Person)

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.bb72b5h.mongodb.net/bancodaapi?retryWrites=true&w=majority`
)
    .then(() => {
        app.listen(PORT)
        console.log('conectado no banco')

    })
    .catch((err => console.log(err)))


