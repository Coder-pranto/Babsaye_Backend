const express = require('express');
const router = express.Router();
// const userRoutes = require('./userRoutes');
const clientRoutes = require('./clientRoutes');
const accountRoutes = require('./accountRoutes');
const receiveRoutes = require('./receiveRoutes');
const receiveCategoryRoutes = require('./receiveCategoryRoutes');
const receiveSubCategoryRoutes = require('./receiveSubCategoryRoutes');
const expenseRoutes = require('./expenseRoutes');
const expenseCategoryRoutes = require('./expenseCategoryRoutes');
const expenseSubCategoryRoutes = require('./expenseSubCategoryRoutes');
const supplierRoutes = require('./supplierRoutes');
const supplierGroupRoutes = require('./supplierGroupRoutes');
const supplierPaymentRoutes = require('./supplierPaymentRoutes');
const supplierPaymentCategoryRoutes = require('./supplierPaymentCategoryRoutes');
const supplierPaymentSubCategoryRoutes = require('./supplierPaymentSubCategoryRoutes');
const moneyReturnRoutes = require('./moneyReturnRoutes');
const moneyReturnCategoryRoutes = require('./moneyReturnCategoryRoutes');
const transferRoutes = require('./transferRoutes');
const staffRoutes = require('./staffRoutes');
const staffPaymentRoutes = require('./staffPaymentRoutes');
const staffSalaryRoutes = require('./staffSalaryRoutes');
const clientGroupRoutes = require('./clientGroupRoutes');
const transactionRoutes = require('./transactionRoutes');
const productRoutes = require('./productRoutes');
const productMisc = require('./productMisc');

// Use user routes
// router.use('/users', userRoutes);

// Use client routes
router.use('/clients', clientRoutes);

router.use('/client-groups', clientGroupRoutes);

// Use account routes
router.use('/accounts', accountRoutes);

//Use transaction routes
router.use('/transactions', transactionRoutes);

// Use receive routes
router.use('/receives', receiveRoutes);

// Use receive category routes
router.use('/receive-categories', receiveCategoryRoutes);

// Use receive subcategory routes
router.use('/receive-subcategories', receiveSubCategoryRoutes);

// Use expense routes
router.use('/expenses', expenseRoutes);

// Use expense category routes
router.use('/expense-categories', expenseCategoryRoutes);

// Use expense subcategory routes
router.use('/expense-subcategories', expenseSubCategoryRoutes);

// Use supplier routes
router.use('/supplier', supplierRoutes);

// Use supplier routes
router.use('/supplier-groups', supplierGroupRoutes);

// Use supplier payment routes
router.use('/supplier-payments', supplierPaymentRoutes);

// Use supplier payment category routes
router.use('/supplier-payment-categories', supplierPaymentCategoryRoutes);

// Use supplier payment subcategory routes
router.use('/supplier-payment-subcategories', supplierPaymentSubCategoryRoutes);

// Use money return routes
router.use('/money-returns', moneyReturnRoutes);

// Use money return category routes
router.use('/money-return-categories', moneyReturnCategoryRoutes);

// Use transfer routes
router.use('/transfers', transferRoutes);

// Use staff routes
router.use('/staff', staffRoutes);

// Use staff payment routes
router.use('/staff-payments', staffPaymentRoutes);

// Use staff salary routes
router.use('/staff-salaries', staffSalaryRoutes);

// Use product routes
router.use('/products', productRoutes);

// Use product miscellaneous routes
router.use('/products/misc', productMisc);

module.exports = router;
