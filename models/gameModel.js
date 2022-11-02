const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    title: {type: String, required: true},
    genre: {type: String, required: false},
    rating: {type: Number, required: true, default: 5},
    image: {type: String},
    review: {type: String, required: false, minlength: 0, maxlength: 280 },
    played: {type: Boolean, default: false}
})

exports.module = mongoose.model('Game', GameSchema)