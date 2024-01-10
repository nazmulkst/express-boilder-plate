const UserModel = require('../../model/user/UserModel');
const OTPModel = require('../../model/user/OTPModel');
const UserCreateService = require('../../service/user/UserCreateService');


exports.registration = async(req, res) => {
    const result = await UserCreateService(req, DataModel);
    if(result.status == 200){
        res.status(200).json(result);
    } else {
        res.status(400).json(result.error)
    }
}