const mongoose = require('mongoose');
const moment = require('moment');
const dataSchema = mongoose.Schema({
    categoryId: {type:Number},
    brandId: {type:Number},
    productId: {type:Number, default:function(){return Date.now() / 1000;}},
    name: {type:String},
    price: {type:String},
    unit: {type:String},
    description:{type:String},
    createdAt: {type:String, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
});

const ProductModel = mongoose.model('products', dataSchema);

module.exports = ProductModel;