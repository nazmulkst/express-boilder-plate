const mongoose = require('mongoose');
const moment = require('moment');
const dataSchema = mongoose.Schema(
    {
        brandId: {type: Number, unique:true},
        name: {type: String, required:true, unique:true},
        createdAt: {type:Date}
    });
    const BrandModel = mongoose.model('brands', dataSchema);
    module.exports = BrandModel;