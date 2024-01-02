const mongoose = require('mongoose');
const moment = require('moment');
const dataSchema = mongoose.Schema({
    returnId: {type:Number},
    productId: {type:Number},
    qty: {type:String},
    cost: {type:String},
    total: {type:String},
    note:{type:String},
    createdAt: {type:String, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
});

const ReturnProductModel = mongoose.model('returnproducts', dataSchema);

module.exports = ReturnProductModel;