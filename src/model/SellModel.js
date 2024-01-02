const mongoose = require('mongoose');
const moment = require('moment');
const dataSchema = mongoose.Schema({
    customerId: {type:Number},
    sellId: {type:Number},
    tax: {type:String},
    cost: {type:String},
    discount: {type:String},
    grandTotal: {type:String},
    note:{type:String},
    createdAt: {type:String, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
});

const SellModel = mongoose.model('sells', dataSchema);

module.exports = SellModel;