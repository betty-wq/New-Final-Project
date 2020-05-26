const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    name: String,
    price: Number,
    img: String,
    stock: Number,
    mpg: String,
    fuel_type: String,
    transmission: String,
    features: String
})

const Car = mongoose.model('car', carSchema)

module.exports = Car