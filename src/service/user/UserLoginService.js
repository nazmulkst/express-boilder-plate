const CreateToken = require('../../utility/CreateToken');

const UserLoginService = async(request, DataModel) => {
    try {
        const {email,password} = request.body;
    
        const data = await DataModel.aggregate([{$match: {email,password}}, {$project: {userId:0, email:1, firstName:1, lastName:1,mobile:1,photo:1}}]);
    
        if(data.length > 0){
            const token = await CreateToken(data[0]['email']);
            return {status: 200, token:token, data:data[0]};
        } else {
            return {status: "Unauthorized"}
        }
        
    } catch (error) {
        return {status: 400, data: error.toString()}
    }
}


module.exports = UserLoginService;