const OTPModel = require('../../model/user/OTPModel');

const UserResetPasswordService = async(request, DataModel) => {
    const {email, OTPCode, password} = request.body;

    try {
        const OTPUsedCount = await OTPModel.aggregate([{$match: {email: email, opt: OTPCode}}]);
        if(OTPUsedCount.length > 0){
            const data = await DataModel.updateOne({email:email}, {password: password});

            return {status: 200, data:data};
        } else {
            return {status: 400, data: "Invalid Reset"}
        }
    } catch (error){
        return {status: 400, data: error.toString()};
    }
}


module.exports = UserResetPasswordService;