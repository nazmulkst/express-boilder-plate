const app = require('./app')
// const express = require('express');
const PORT = 5000;

app.listen(PORT, function(req, res){
    console.log('Application Run Success with Port: ' + PORT)
})