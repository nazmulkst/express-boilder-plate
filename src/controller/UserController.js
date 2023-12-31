const UserModel = require('../model/UserModel');
const jwt = require('jsonwebtoken');

exports.createUser = async(req, res) => {
    const {username,password,roll} = req.body;
    if(!username || !password || !roll){
        res.status(400).json({error: "All Fields are required"})
    }
    try {
        const userExists = await UserModel.findOne({username});
        if(userExists){
            res.status(400).json({error: "User Already Exists..."})
        } else {
            const userData = new UserModel({username,password,roll});
            await userData.save();
            res.status(200).json(userData);
        }
    } catch (error) {
        res.status(400).json(error);
        console.log("Error: Can't create user")
    }
}

exports.updateUser = async(req, res) => {
    const {id} = req.params;
    const {username,password,roll} = req.body;

    try {
        const userData = await UserModel.updateOne({userId: id}, {username,password,roll});
        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json(error);
        console.log("Error: Can't update")
    }
}

exports.getAllUser = async(req, res) => {
    const search = req.query.search || "";
    const roll = req.query.roll || "";
    const sort = req.query.sort || "";
    const page = req.query.page || 1;
    const ITEM_PER_PAGE = 3;

    console.log('search', search);
    
    const query = {
        username: {$regex:search, $options:"i"}
    };
    if(roll !== ""){
        query.roll = roll
    }
    console.log(query)
    console.log({created_at:sort})
    try {
        const skip = (page - 1) * ITEM_PER_PAGE;

        const count = await UserModel.countDocuments(query);

        const userData = await UserModel.find(query).sort({created_at:sort == "new" ? -1 : 1}).limit(ITEM_PER_PAGE).skip(skip);

        const pageCount = Math.ceil(count / ITEM_PER_PAGE);

        res.status(200).json({
            pagination: {
                count:pageCount
            },
            userData
        });
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getUser = async(req, res) => {
    const {id} = req.params;
    try {
        const userData = await UserModel.findOne({userId: id});
        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json(error)
    }
}

// exports.getAllUser = async(req, res) => {
//     try {
//         const userData = await UserModel.find();
//         res.status(200).json(userData);
//     } catch (error) {
//         res.status(400).json(error)
//     }
//     // await UserModel.find((error, data) => {
//     //     if(error){
//     //         res.status(400).json({status: "fail", data: error})
//     //     } else {
//     //         res.status(200).json({status: "success", data: data})
//     //     }
//     // });
// }

exports.deleteUser = async(req, res) => {
    const {id} = req.params;

    try {
        const userData = await UserModel.deleteOne({userId: id});
        res.status(200).json(userData)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.loginUser = async(req, res) => {
    const {username, password} = req.body;
    console.log(username,password)

    try {
        const userData = await UserModel.find({username, password}).count();
        console.log('data', userData)
        if(userData > 0){
            // Create auth token
            const payload = {exp: Math.floor(Date.now() / 1000) + (24*60*60), username:username};
            const token = jwt.sign(payload, 'SecretKey123456789');
            res.status(200).json({
                userAuth: {
                    authToken: token
                }
            })
        } else {
            res.status(400).json("UnAuthorized")
        }
    } catch (error) {
        res.status(400).json(error)
        console.log('Authentication Fail')
    }
    // UserModel.find({username: username, password:password}, (error, data) => {
    //     if(error){
    //         res.status(400).json({status: "fail", data: error})
    //     } else {
    //         if(data.length > 0){
    //             // Create auth token
    //             const payload = {exp: Math.floor(Date.now() / 1000) + (24*60*60), data:data[0]};
    //             const token = jwt.sign(payload, 'SecretKey123456789');
    //             res.status(200).json({status: "success", data: data[0]})
    //         } else {
    //             res.status(401).json({status:"unauthorized"})
    //         }
    //     }
    // });
}