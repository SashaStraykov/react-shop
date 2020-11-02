const { Schema, model } = require( 'mongoose' );

const CommentSchema = new Schema( {
    id: {
        type: String,
        require: true,
        unique: true,
    },
    login: {
        type: String,
        require: true,
        unique: true,
    },
    comment: {
        type: String,
        require: true,
    },
    timeStamp: {
        type: Date,
        default: Date.now,
    }
})

module.exports = model( 'Comment', CommentSchema )