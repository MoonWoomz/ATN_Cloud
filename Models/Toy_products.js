const mongoose = require('mongoose');

const Schema = mongoose.Schema; 
const ToySchema = new Schema({
    name: {
        type: String,
        require: true,
    }, 
    category: {
        type: String,
        require: true,
    },
    price: {
        type: Double,
        require: true,
    },
    quantity: {
        type: BigInt,
        require: true,
    },
    image: {
        type: Image, 
        require:true,
    }
});

module.exports = mongoose.model('Toy_products', ToySchema);