const ExpenseTypeModel = require('../model/ExpenseTypeModel');
const moment = require('moment');

exports.createExpenseType = async(req, res) => {
    const typeId = Math.floor(Date.now() / 1000);
    const {name} = req.body;
    const createdAt = moment(new Date).format('YYYY-MM-DD hh:mm:ss');

    if(!name){
        res.status(400).json({error: "name field is required"})
    }
    try {
        const data = new ExpenseTypeModel({typeId,name,createdAt});
        await data.save();

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.getAllExpenseType = async(req, res) => {
    try {
        const data = await ExpenseTypeModel.find();

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.getExpenseType = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await ExpenseTypeModel.findOne({typeId:id});

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.deleteExpenseType = async(req,res) => {
    const {id} = req.params;
    try {
        const data = await ExpenseTypeModel.deleteOne({typeId:id});

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.updateExpenseType = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    try {
        const data = await ExpenseTypeModel.updateOne({typeId:id}, {name});

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}