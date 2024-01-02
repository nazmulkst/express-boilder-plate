const mongoose = require('mongoose');
const moment = require('moment')
const dataSchema = mongoose.Schema(
    {
        supplierId: {type: Number, default:function(){return Math.floor(Date.now() / 1000)}},
        name: {type: String},
        address: {type:String},
        phone: {type:String},
        email: {type:String, required:true, unique:true},
        createdAt: {type:String, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
    });

const SupplierModel = mongoose.model('suppliers', dataSchema);
module.exports = SupplierModel;
