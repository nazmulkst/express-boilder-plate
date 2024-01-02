const express = require('express');
const UserController = require('../controller/UserController');
const BrandController = require('../controller/BrandController');
const CategoryController = require('../controller/CategoryController')
const ExpenseTypeController = require('../controller/ExpenseTypeController');
const ExpenseListController = require('../controller/ExpenseListController');
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


// Category Route
router.post("/createCategory", AuthVerifyMiddleware, CategoryController.createCategory);
router.get("/getAllCategory", AuthVerifyMiddleware, CategoryController.getAllCategory);
router.get("/getCategory/:id", AuthVerifyMiddleware, CategoryController.getCategory);
router.delete("/deleteCategory/:id", AuthVerifyMiddleware, CategoryController.deleteCategory);
router.put("/updateCategory/:id", AuthVerifyMiddleware, CategoryController.updateCategory);

// ExpenseType Route
router.post("/createExpenseType", AuthVerifyMiddleware, ExpenseTypeController.createExpenseType);
router.get("/getAllExpenseType", AuthVerifyMiddleware, ExpenseTypeController.getAllExpenseType);
router.get("/getExpenseType/:id", AuthVerifyMiddleware, ExpenseTypeController.getExpenseType);
router.delete("/deleteExpenseType/:id", AuthVerifyMiddleware, ExpenseTypeController.deleteExpenseType)
router.put("/updateExpenseType/:id", AuthVerifyMiddleware, ExpenseTypeController.updateExpenseType)

// ExpenseList Route
router.post("/createExpenseList", AuthVerifyMiddleware, ExpenseListController.createExpenseList);

module.exports = router;