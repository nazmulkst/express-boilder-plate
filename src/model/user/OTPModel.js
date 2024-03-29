const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    email: {type:String},
    otp: {type: String},
    status: {type:Number, default:0},
    createAt: {type:Date}
})


const OTPModel = mongoose.model('opts', dataSchema);

module.exports = OTPModel;