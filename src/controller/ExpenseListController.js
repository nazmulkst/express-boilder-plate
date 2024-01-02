const ExpenseListModel = require('../model/ExpenseListModel');
const moment = require('moment');

exports.createExpenseList = async(req, res) => {
    const listId = Math.floor(Date.now() / 1000);
    const {typeId,name,cost,note} = req.body;
    const createdAt = moment(new Date).format('YYYY-MM-DD hh:mm:ss');

    if(!typeId || !name || !cost || !note) {
        res.status(400).json({error: "All fields are required"})
    }
    try {
        const data = new ExpenseListModel({listId,typeId,name,cost,note,createdAt});
        await data.save();

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
}
