const express = require("express");
const mongoose = require('mongoose');
//require('dotenv').config({path: 'config/keys.env'});
const customerController = require("./controllers/CustomerController.js");
const propertyController = require("./controllers/PropertyController.js");

const app = express();

app.use(express.json());

app.get("/", (req,res) => {
    res.json({
        message : "Hello"
    })
})

app.use("/customers", customerController);

app.use("/properties", propertyController);

app.use((req,res) =>{
    res.status(404).json({
        message: "Requested Resource Not Found"
    })
})

const PORT = process.env.PORT;

const URI = process.env.MONGODB_QUERY_STRING;

app.listen(PORT,()=>{
	console.log(`RESTful API is up and running on PORT ${PORT}`);

	mongoose.connect(URI)
	.then(()=>{
		console.log(`Connected to MongoDB`)
	})
	.catch(err=>{
		console.log(`Error ${err}`)
	})
})