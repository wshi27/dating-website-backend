const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    birthYear:{
        type: Number,
        required: true
    },
    birthMonth:{
        type: Number,
        required: true
    },
    birthDay:{
        type: Number,
        required: false
    },
    streetAddress:{
        type: String,
        required: false
    },
    cityAddress:{
        type: String,
        required: true
    },
    stateAddress:{
        type: String,
        required: true
    },
    registeredDate:{
        type: Date,
        required: true,
        default: Date.now
    },
    img1:{
        data: Buffer, 
        contentType: String 
    },
    img2:{
        data: Buffer,
        contentType: String
    },
    img3:{
        data: Buffer,
        contentType: String
    },
    img4:{
        data: Buffer,
        contentType: String
    },
    img5:{
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('user', userSchema)