const mongoose = require('mongoose')

const DB_USER = 'Caio'
const DB_PASSWORD = encodeURIComponent('ADM@71')
const conn = () =>{
    mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.bb72b5h.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
        .then(() => {
            app.listen(PORT)
            console.log('conectado no banco')
    
        })
        .catch((err => console.log(err)))
} 

module.exports = conn    