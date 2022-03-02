const customerModel = require("../models/CustomerModel.js");

exports.createACustomer = async(req,res)=>{

    try
    {
        const customer = new customerModel(req.body);
        const newCustomer = await customer.save();
        res.json({
            message : "The customer was successfully created and stored in the Database",
            data: newCustomer
        })
    }
    catch(err)
    {
        res.status(500).json({
            message : err
        })
    }

};

exports.getCustomers = async(req,res)=>{

    const queryStringObj = {};
    if(req.query.firstName)
    {
        queryStringObj.firstName = req.query.firstName
    }

    if(req.query.lastName)
    {
        queryStringObj.lastName = req.query.lastName
    }

    if(req.query.email)
    {
        queryStringObj.email = req.query.email
    }

    try
    {
        const customers = await customerModel.find(queryStringObj)

        res.json({
            message : "A list of customers",
            data : customers,
            totalCustomers : customers.length
        })
    }
    catch(err)
    {
        res.status(500).json({
            message : err
        })
    }

};

exports.getACustomer = async(req,res)=>{
    try
    {
        const customer = await customerModel.findById(req.params.id)
        if(customer)
        {
            res.json({
                message : `Customer with the id ${req.params.id}`,
                data : customer
            })
        }
        else
        {
            res.status(404).json({
                message : `No customer in the database with the id ${req.params.id}`
            })
        }
    }
    catch(err)
    {
        if(err.name==="CastError" && err.kind==="ObjectId")
        {
            res.status(404).json({
                message : `No customer in the database with the id ${req.params.id}`
            })
        }
        else
        {
            res.status(500).json({
                message : err
            })
        }
    }

};