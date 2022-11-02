const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, maxlength: 32, maxlength: 3},
    password: {type: String, requried: true, minlength: 8, maxlength: 64},
    catalog: [{type: Schema.Types.ObjectId, ref: 'Game'}]
})

exports.module = mongoose.model('User', UserSchema)