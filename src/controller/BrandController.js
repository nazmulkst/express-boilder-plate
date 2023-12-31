const BrandModel = require('../model/BrandModel');
const moment = require('moment');

exports.createBrand = async(req, res) => {
    const brandId = Math.floor(Date.now() / 1000);
    const name = req.body.name;
    const createdAt = moment(new Date).format('YYYY-MM-DD hh:mm:ss')

    if(!name){
        res.status(400).json({error: "Name is a required Field."})
    }

    try {
        const brandData = new BrandModel({brandId,name,createdAt});
        await brandData.save();
        res.status(200).json(brandData);
    } catch (error) {
        res.status(400).json(error);
        console.log("Can't create Brand")
    }
}

exports.getAllBrand = async(req, res) => {
    try {
        const brandData = await BrandModel.find();
        res.status(200).json(brandData);
    } catch (error) {
        res.status(400).json(error);
        console.log("Error to get Brand")
    }
}

exports.getBrand = async(req, res) => {
    const {id} = req.params;
    try {
        const brandData = await BrandModel.findOne({brandId:id});
        res.status(200).json(brandData);
    } catch (error) {
        res.status(400).json(error);
        console.log("Error to get Brand")
    }
}

exports.deleteBrand = async(req, res) => {
    const {id} = req.params;

    try {
        const brandData = await BrandModel.deleteOne({brandId: id});
        res.status(200).json(brandData)
    } catch (error) {
        res.status(400).json(error)
        console.log('Brand Delete Error')
    }
}

exports.updateBrand = async(req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    try {
        const brandData = await BrandModel.updateOne({brandId:id}, {name:name});
        res.status(200).json(brandData)
    } catch (error) {
        res.status(400).json(error)
        console.log('Brand Update Error')
    }
}