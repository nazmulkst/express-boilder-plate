const OTPModel = require('../../model/OTPModel');

const UserVerifyEmailService = async(request, DataModel) => {
    const {email} = request.params;
    const OTPCode = Math.floor(100000 + Math.random() * 900000);

    try {
        const OTPUsedCount = await OTPModel.aggregate([{$match: {email: email}}, {$count: "total"}]);
        if(OTPUsedCount.length > 0){
            await OTPModel.create({email:email, opt: OTPCode});

            const sendEmail = await sendEmailUtiliy(email, "Your PIN Code is= " + OTPCode);


            return {status: 200, data:sendEmail};
        } else {
            return {status: 400, data: "Invalid Reset"}
        }
    } catch (error){
        return {status: 400, data: error.toString()};
    }
}


module.exports = UserVerifyEmailService;