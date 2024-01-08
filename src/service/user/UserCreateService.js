const UserCreateService = async (request, DataModel) => {
    try {
        const reqBody = request.body;
        const data = await DataModel.create(reqBody);
        
        return {status: 200, data: data}
        
    } catch (error) {
        return {status: 400, data: error.toString()}
    }
}

module.exports = UserCreateService;