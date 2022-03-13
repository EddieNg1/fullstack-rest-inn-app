const express = require("express");
const mongoose = require('mongoose');
//require('dotenv').config({path: 'config/keys.env'});
const customerController = require("./controllers/CustomerController.js");
const propertyController = require("./controllers/PropertyController.js");

const cors = require("cors")

const app = express();

app.use(express.json());
const domainsFromEnv = process.env.CORS_DOMAINS || ""

const whitelist = domainsFromEnv.split(",").map(item => item.trim())
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

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