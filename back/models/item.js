const {Schema, model} = require('mongoose')

const ItemSchema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    idCategory: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: Date.now,
    },
    img: {
        type: [String],
    },
    approved:{
        type: String,
        default: '',
    },
    remark: {
        type: String,
        default: '',
    },
    comments: {
        type: [Object],
        default:[],
    }
})

module.exports = model('Item', ItemSchema)