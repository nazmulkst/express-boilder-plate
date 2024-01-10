const OTPModel = require('../../model/user/OTPModel');

const UserVerifyOtpService = async(request, DataModel) => {
    const {email, OTPCode} = request.params;
    const status = 0;
    const statusUpdate = 1;
    try {
        const OTPCount = await OTPModel.aggregate([{$match: {email: email, otp: OTPCode, status:status}}, {$count: "total"}]);
        if(OTPCount.length > 0){
            const OTPUpdate = await DataModel.updateOne({email:email, opt: OTPCode, status:status}, {email: email, opt: OTPCode, status:statusUpdate});

            return {status: 200, data:OTPUpdate};
        } else {
            return {status: 400, data: "Invalid OTP"}
        }
    } catch (error){
        return {status: 400, data: error.toString()};
    }
}


module.exports = UserVerifyOtpService;