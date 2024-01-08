const UserDetailService = async(request, DataModel) => {
    try {
        const {userId} = request.params;
        const data = await DataModel.aggregate([{$match: {userId: userId}}]);

        return {status: 200, data: data};
    } catch (error) {
        return {status: 400, data: error.toString()};
    }
}


module.exports = UserDetailService;