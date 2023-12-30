const express = require('express');
const UserController = require('../controller/UserController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');

const router = new express.Router();

// User Login
router.post("/loginUser", UserController.loginUser);

router.post("/createUser", AuthVerifyMiddleware, UserController.createUser);
router.get("/getAllUser", AuthVerifyMiddleware, UserController.getAllUser);
router.get("/getUser/:id", AuthVerifyMiddleware, UserController.getUser);
router.delete("/deleteUser/:id", AuthVerifyMiddleware, UserController.deleteUser);
router.put("/updateUser/:id", AuthVerifyMiddleware, UserController.updateUser);

module.exports = router;