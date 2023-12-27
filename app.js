// Basic Library Import
// const express = require('express');
// const router = require('./src/routes/api');
// const app = new express();
// const bodyParser = require('body-parser')
import { Express } from 'express';
import router from './src/route/api';
import bodyParser from 'body-parser';


// Security Middleware Library Import
// const rateLimit = require('express-rate-limiter');
import expressRateLimiter from 'express-rate-limiter';
import helmet from 'helmet';
import ExpressMongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import { CorsOptions } from 'cors';

// Database Library Import
import mongoose from 'mongoose';

// Security Middleware Implement



const app = new Express();

app.use(CorsOptions());
app.use(helmet());
app.use(ExpressMongoSanitize());
app.use(hpp());

// Body Parser Implent
app.use(bodyParser.json())

// Request Rate Limit
const limiter = expressRateLimiter({window: 15 * 60 * 1000, max: 3000});
app.use(limiter);



// Mongo DB Database Connection

const url = "mongodb://localhost:27017/inventory";
const option = {autoIndex: true};

mongoose.connect(url, option, function(error){
    console.log("Connection Successfully established")
    console.log(error);
})

// Routing Implement

app.use("/api/v1", router);

// Undefined Route Implement

app.use("*", function(req, res){
    res.status(404).json({status:"fail", data: "Not found"})
})

module.exports = app;