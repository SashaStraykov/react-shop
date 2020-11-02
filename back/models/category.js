const {Schema, model} = require('mongoose');

const CategorySchema = new Schema({
    idCategory: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
})

module.exports = model('Category', CategorySchema );