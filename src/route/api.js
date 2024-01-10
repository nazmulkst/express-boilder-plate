const express = require('express');
const UserController = require('../controller/UserController');
const BrandController = require('../controller/BrandController');
const CategoryController = require('../controller/CategoryController')
const ExpenseTypeController = require('../controller/ExpenseTypeController');
const ExpenseListController = require('../controller/ExpenseListController');
const CustomerController = require('../controller/CustomerController');
const SupplierController = require('../controller/SupplierController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');
const ControllerUser = require('../controller/user/UserController');

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
router.get("/getAllExpenseList", AuthVerifyMiddleware, ExpenseListController.getAllExpenseList);
// router.get("/getExpenseList", AuthVerifyMiddleware, ExpenseListController.getExpenseList)
router.delete("/deleteExpenseList/:id", AuthVerifyMiddleware, ExpenseListController.deleteExpenseList)
router.put("/updateExpenseList", AuthVerifyMiddleware, ExpenseListController.updateExpenseList);

// ExpenseType Route
router.post("/createCustomer", AuthVerifyMiddleware, CustomerController.createCustomer);
router.get("/getAllCustomer", AuthVerifyMiddleware, CustomerController.getAllCustomer);
router.get("/getCustomer/:id", AuthVerifyMiddleware, CustomerController.getCustomer);
router.delete("/deleteCustomer/:id", AuthVerifyMiddleware, CustomerController.deleteCustomer)
router.put("/updateCustomer/:id", AuthVerifyMiddleware, CustomerController.updateCustomer)

// ExpenseType Route
router.post("/createSupplier", AuthVerifyMiddleware, SupplierController.createSupplier);
router.get("/getAllSupplier", AuthVerifyMiddleware, SupplierController.getAllSupplier);
router.get("/getSupplier/:id", AuthVerifyMiddleware, SupplierController.getSupplier);
router.delete("/deleteSupplier/:id", AuthVerifyMiddleware, SupplierController.deleteSupplier);
router.put("/updateSupplier/:id", AuthVerifyMiddleware, SupplierController.updateSupplier);

// User Registration
router.post("/registration", AuthVerifyMiddleware, ControllerUser.registration)

module.exports = router;