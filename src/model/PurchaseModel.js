const mongoose = require('mongoose');
const moment = require('moment');
const dataSchema = mongoose.Schema({
    supplierId: {type:Number},
    purchaseId: {type:Number, default:function(){return Date.now() / 1000;}},
    tax: {type:String},
    discount: {type:String},
    cost: {type:String},
    grandTotal: {type:String},
    note:{type:String},
    createdAt: {type:String, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
});

const PurchaseModel = mongoose.model('purchases', dataSchema);

module.exports = PurchaseModel;