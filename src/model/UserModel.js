const mongoose = require('mongoose');
const moment = require('moment');

const dataSchema = new mongoose.Schema(
    {
        userId: {type: Number, default:function(){return Math.floor(Date.now() / 1000)}},
        username: {type: String, required:true, unique:true},
        password: {type:String, required:true},
        roll: {type:String, required:true},
        created_at: {type:Date, default:moment(new Date).format('YYYY-MM-DD hh:mm:ss')}
    });

const UserModel = new mongoose.model('users', dataSchema);
module.exports = UserModel;
