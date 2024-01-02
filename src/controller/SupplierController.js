const SupplierModel = require('../model/SupplierModel');
const moment = require('moment');

exports.createSupplier = async(req, res) => {
    const supplierId = Math.floor(Date.now() / 1000);
    const {name, address, phone, email} = req.body;
    const createdAt = moment(new Date).format('YYYY-MM-DD hh:mm:ss');

    if(!name || !address || !phone || !email){
        res.status(400).json({error: "All field are required"})
    }
    try {
        const data = new SupplierModel({supplierId,name, address, phone, email,createdAt});
        await data.save();

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.getAllSupplier = async(req, res) => {
    try {
        const data = await SupplierModel.find();

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.getSupplier = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await SupplierModel.findOne({supplierId:id});

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.deleteSupplier = async(req,res) => {
    const {id} = req.params;
    try {
        const data = await SupplierModel.deleteOne({supplierId:id});

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}

exports.updateSupplier = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    try {
        const data = await SupplierModel.updateOne({supplierId:id}, {name});

        res.status(200).json(data)
    } catch (error){
        res.status(400).json(error)
    }
}