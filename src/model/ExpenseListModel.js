const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    expenseId: {type:Number, unique:true},
    typeId: {type:Number, required: true},
    name: {type:String, required:true},
    cost: {type:Number, required: true},
    note: {type:String},
    createdAt: {type:Date}
});

const ExpenseListModel = mongoose.model('expenselists', dataSchema);

module.exports = ExpenseListModel;