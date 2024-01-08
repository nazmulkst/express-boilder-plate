const UserUpdateService = async(request, DataModel) => {
    try {
        const {email} = request.body;
        const data = await DataModel.updateOne({email:email}, request.body)

        return {status: 200, data: data}
    } catch (error){
        return {status: 400, data: error.toString()}
    }
}

module.exports = UserUpdateService;