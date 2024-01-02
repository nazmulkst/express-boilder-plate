const mongoose = require('mongoose');
const moment = require('moment')
const dataSchema = mongoose.Schema({
    sellId: {type:Number},
    productId: {type:Number},
    qty: {type:String},
    cost: {type:String},
    total: {type:String},
    createdAt: {type:String, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
});

const SellProductModel = mongoose.model('sellproducts', dataSchema);

module.exports = SellProductModel;