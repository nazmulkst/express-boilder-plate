const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    typeId: {type:Number, unique:true},
    name: {type:String, required: true},
    createdAt: {type:Date}
});

const ExpenseTypeModel = mongoose.model('expensetypes', dataSchema);

module.exports = ExpenseTypeModel;