const CategoryModel = require('../model/CategoryModel');
const moment = require('moment');

exports.createCategory = async(req, res) => {
    const categoryId = Math.floor(Date.now() / 1000);
    const name = req.body.name;
    const createdAt = moment(new Date).format('YYYY-MM-DD hh:mm:ss')

    if(!name){
        res.status(400).json({error: "Name is a required Field."})
    }

    try {
        const data = new CategoryModel({categoryId,name,createdAt});
        await data.save();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
        console.log("Can't create Category")
    }
}

exports.getAllCategory = async(req, res) => {
    try {
        const data = await CategoryModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
        console.log("Error to get Category")
    }
}

exports.getCategory = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await CategoryModel.findOne({categoryId:id});
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
        console.log("Error to get Category")
    }
}

exports.deleteCategory = async(req, res) => {
    const {id} = req.params;

    try {
        const data = await CategoryModel.deleteOne({categoryId: id});
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
        console.log('Category Delete Error')
    }
}

exports.updateCategory= async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    try {
        const data = await CategoryModel.updateOne({categoryId:id}, {name:name});
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
        console.log('Category Update Error')
    }
}