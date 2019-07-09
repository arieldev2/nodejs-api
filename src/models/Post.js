const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: { type: String, default: '', required: true },
    description: { type: String, default: '', required: true },
    date: { type: Date, default: Date.now }

})

module.exports = mongoose.model('post', postSchema);