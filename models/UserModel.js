const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    text: {
        type: Object,
        require: true
    }
})

module.exports = mongoose.model('User', UserSchema)