const mongoose = require('mongoose');
const moment = require('moment');
const dataSchema = mongoose.Schema(
    {
        categoryId: {type: Number, default: function(){
            return Math.floor(Date.now() / 1000);
        }},
        name: {type: String, unique:true},
        createdAt: {type:String, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
    });
    const CategoryModel = mongoose.model('categories', dataSchema);
    module.exports = CategoryModel;