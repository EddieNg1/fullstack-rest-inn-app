const express = require('express');
const router = express.Router();
const customerService = require("../services/CustomerService.js");
const {createCustomerValidation} = require("../middleware/customerValidation.js");

router.get("/", customerService.getCustomers);

router.get("/:id", customerService.getACustomer);

router.post("/",createCustomerValidation,customerService.createACustomer);



module.exports = router;