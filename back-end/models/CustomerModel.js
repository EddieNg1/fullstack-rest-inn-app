const mongoose = require("mongoose");

const { Schema } = mongoose;

const bcrypt = require('bcryptjs');

const customerSchema = new Schema({

    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phoneNumbers : [{
        type : Number
    }]
})

//Middleware for save
customerSchema.pre('save', async function(next){
    try
    {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword
        next();
    }
    catch(err)
    {
        next(err)
    }
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;