const express = require('express');
const UserController = require('../controller/UserController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');

const router = new express.Router();

// User Login
// router.post("/loginUser", UserController.loginUser);

router.post("/createUser", UserController.createUser);
router.get("/getAllUser", UserController.getAllUser);
router.get("/getUser/:id", UserController.getUser);
router.delete("/deleteUser/:id", UserController.deleteUser);
router.put("/updateUser/:id", UserController.updateUser);

module.exports = router;