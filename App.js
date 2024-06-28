const mongoose = require ('mongoose')
 const url_bd = 'mongodb://localhost:27017/LIBRERIA'
 
 
 mongoose.connect(url_bd)
.then(() => {
    console.log('si funciono')
    
})
.catch((err) => {
    console.log('no funciona')
    
})
//se realizan esquemas para las bases de datos 
const Esquema_Libro = new mongoose.Schema({
    name: {
        type: String
    },
    release: {
        type: String
    },
    genre: {
        type: String
    },
    cost: {
        type: String
    },
    discount: {
        type: String
    },
    editorial: {
        type: String
    },
    author: {
        type: String
    }
})

//se crean las colecciones 
const modelo_Libro = new mongoose.model('datos del libro', Esquema_Libro)

//crear datos
modelo_Libro.create({
    name: "it",
    release: "17/05/98",
    genre: "Suspenso",
    cost: "$12",
    discount: "10%",
    editorial: "Panini",
    author: "Stephen King"
    

})
