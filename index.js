
const mongoose = require('mongoose');


const getBook = new mongoose.Schema({
    bookName: {
        type : String,
        required: true
    },
    bookAuthor: {
        type : String,
        required: true
    },
    bookAvailable:{
        type: Boolean,
        required: true,
        default: true
    }
})
module.exports = mongoose.model('getbook',getBook)






























































































