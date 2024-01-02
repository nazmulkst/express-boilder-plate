const mongoose = require('mongoose');
const moment = require('moment');
const dataSchema = mongoose.Schema({
    purchaseId: {type:Number},
    productId: {type:Number},
    qty: {type:String},
    cost: {type:String},
    total: {type:String},
    createdAt: {type:String, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
});

const PurchaseProductModel = mongoose.model('purchaseproducts', dataSchema);

module.exports = PurchaseProductModel;