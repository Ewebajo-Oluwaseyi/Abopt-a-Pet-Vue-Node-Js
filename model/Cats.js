const mongoose = require('mongoose')

const CatsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    species: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Cats', CatsSchema)