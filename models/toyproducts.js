const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 
const ToySchema = new Schema( {
    Name: {
        type: String,
        require: true
    },
    Price: {
        type: String,
        require: true
    },
    Quantity: {
        type: String,
        require: true
    },
    Image: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Toy', ToySchema);