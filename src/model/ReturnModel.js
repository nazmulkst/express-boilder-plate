const mongoose = require('mongoose');
const moment = require('moment');
const dataSchema = mongoose.Schema({
    customerId: {type:Number},
    returnId: {type:Number},
    returnCharge: {type:String},
    discount: {type:String},
    grandTotal: {type:String},
    note:{type:String},
    createdAt: {type:String, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
});

const ReturnModel = mongoose.model('returns', dataSchema);

module.exports = ReturnModel;