const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect('mongodb://localhost:27017/inventory').then(
    () => console.log("Database Connected")
).catch((err) => console.log(err))