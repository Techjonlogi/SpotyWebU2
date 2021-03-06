const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    user: { type: String, required: true },
    name: { type: String, required: true },
    songs: [{ type: mongoose.Types.ObjectId , ref: 'songs'}]
});

const model = mongoose.model('list', listSchema);
module.exports = model;