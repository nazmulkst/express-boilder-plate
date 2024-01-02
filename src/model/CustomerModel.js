const mongoose = require('mongoose');
const moment = require('moment');
const dataSchema = mongoose.Schema(
    {
        customerId: {type: Number, default:function(){return Math.floor(Date.now() / 1000)}},
        name: {type: String},
        email: {type:String, unique:true},
        phone: {type:String},
        address: {type:String},
        createdAt: {type:String, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
    });

const CustomerModel = mongoose.model('customers', dataSchema);
module.exports = CustomerModel;
