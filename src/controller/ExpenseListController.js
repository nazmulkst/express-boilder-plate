const ExpenseListModel = require('../model/ExpenseListModel');
const moment = require('moment');

exports.createExpenseList = async(req, res) => {
    const expenseId = Math.floor(Date.now() / 1000);
    const {typeId,name,cost,note} = req.body;
    const createdAt = moment(new Date).format('YYYY-MM-DD hh:mm:ss');

    if(!typeId || !name || !cost || !note) {
        res.status(400).json({error: "All fields are required"})
    }
    try {
        const data = new ExpenseListModel({expenseId,typeId,name,cost,note,createdAt});
        await data.save();

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.getAllExpenseList = async (req, res) => {
    try {
        const data = await ExpenseListModel.aggregate([{$lookup: {from: "expensetypes", localField: "typeId", foreignField: "typeId", as: "Type"}}]);

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }

}


exports.getExpenseList = async (req, res) => {
    try {
        const data = await ExpenseListModel.aggregate([{$lookup: {from: "expensetypes", localField: "typeId", foreignField: "typeId", as: "Type"}}]);

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }

}

exports.deleteExpenseList = async (req, res) => {
    const {id} = req.params;

    try {
        const data = await ExpenseListModel.deleteOne({expenseId:id});

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.updateExpenseList = async(req, res) => {
    const {id} = req.params;

    try {
        const data = await ExpenseListModel.updateOne({expenseId:id});

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}