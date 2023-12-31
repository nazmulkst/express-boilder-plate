const express = require('express');
const UserController = require('../controller/UserController');
const BrandController = require('../controller/BrandController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');

const router = new express.Router();

// User Login
router.post("/loginUser", UserController.loginUser);

// User Route
router.post("/createUser", AuthVerifyMiddleware, UserController.createUser);
router.get("/getAllUser", AuthVerifyMiddleware, UserController.getAllUser);
router.get("/getUser/:id", AuthVerifyMiddleware, UserController.getUser);
router.delete("/deleteUser/:id", AuthVerifyMiddleware, UserController.deleteUser);
router.put("/updateUser/:id", AuthVerifyMiddleware, UserController.updateUser);

// Brand Route
router.post("/createBrand", AuthVerifyMiddleware, BrandController.createBrand);
router.get("/getAllBrand", AuthVerifyMiddleware, BrandController.getAllBrand);
router.get("/getBrand/:id", AuthVerifyMiddleware, BrandController.getBrand);
router.delete("/deleteBrand/:id", AuthVerifyMiddleware, BrandController.deleteBrand);
router.put("/updateBrand/:id", AuthVerifyMiddleware, BrandController.updateBrand);

module.exports = router;