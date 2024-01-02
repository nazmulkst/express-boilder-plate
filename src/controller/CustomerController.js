const CustomerModel = require('../model/CustomerModel');
const moment = require('moment');

exports.createCustomer = async(req, res) => {
    const customerId = Math.floor(Date.now() / 1000);
    const {name, email, phone, address} = req.body;
    const createdAt = moment(new Date).format('YYYY-MM-DD hh:mm:ss');

    if(!name || !email || !phone || !address){
        res.status(400).json({error: "All field are required"})
    }
    try {
        const data = new CustomerModel({customerId,name, email, phone, address,createdAt});
        await data.save();

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.getAllCustomer = async(req, res) => {
    try {
        const data = await CustomerModel.find();

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.getCustomer = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await CustomerModel.findOne({customerId:id});

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.deleteCustomer = async(req,res) => {
    const {id} = req.params;
    try {
        const data = await CustomerModel.deleteOne({customerId:id});

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.updateCustomer = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    try {
        const data = await CustomerModel.updateOne({customerId:id}, {name});

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}