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
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    image: {
        type: String, 
        require:true,
    }
});

module.exports = mongoose.model('Toy_products', ToySchema);