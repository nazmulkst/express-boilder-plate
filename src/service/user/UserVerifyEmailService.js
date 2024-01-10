const OTPModel = require('../../model/user/OTPModel');
const SendEmailUtility = require('../../utility/SendEmailUtility');

const UserVerifyEmailService = async(request, DataModel) => {
    const {email} = request.params;
    const OTPCode = Math.floor(100000 + Math.random() * 900000);

    try {
        const OTPUsedCount = await OTPModel.aggregate([{$match: {email: email}}, {$count: "total"}]);
        if(OTPUsedCount.length > 0){
            await OTPModel.create({email:email, opt: OTPCode});

            const sendEmail = await SendEmailUtility(email, "Your PIN Code is= " + OTPCode, "Inventory User PIN Verification");

            return {status: 200, data:sendEmail};
        } else {
            return {status: 400, data: "No User Found with This Email"}
        }
    } catch (error){
        return {status: 400, data: error.toString()};
    }
}


module.exports = UserVerifyEmailService;