const propertyModel = require("../models/PropertyModel.js");

exports.createAProperty = async(req,res)=>{

    try
    {
        const property = new propertyModel(req.body);
        const newProperty = await property.save();
        res.json({
            message : "The property was successfully created and stored in the Database",
            data: newProperty
        })
    }
    catch(err)
    {
        res.status(500).json({
            message : err
        })
    }
};

exports.getProperties = async(req,res)=>{

    const queryStringObj = {};
    if(req.query.type)
    {
        queryStringObj.type = req.query.type
    }

    if(req.query.location)
    {
        queryStringObj.location = req.query.location
    }

    if(req.query.bestSeller)
    {
        queryStringObj.bestSeller = req.query.bestSeller
    }

    try
    {
        const properties = await propertyModel.find(queryStringObj)
        if(properties.length > 0)
        {
            res.json({
                message : "A list of properties",
                data : properties,
                totalCustomers : properties.length
            })
        }
        else
        {
            res.status(404).json({
                message : "No properties found"
            })
        }
    }
    catch(err)
    {
        res.status(500).json({
            message : err
        })
    }
};

exports.getAProperty = async(req,res)=>{
    try
    {
        const property = await propertyModel.findById(req.params.id)

        if(property)
        {
            res.json({
                message : `Property with the id ${req.params.id}`,
                result : property
            })
        }
        else
        {
            res.status(404).json({
                message : `No Property in the database with the id ${req.params.id}`
            })
        }
    }
    catch(err)
    {
        if(err.name==="CastError" && err.kind==="ObjectId")
        {
            res.status(404).json({
                message : `No property in the database with the id ${req.params.id}`
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

exports.getPropertyTypes = async(req,res)=>{
    try
    {
        const types = await propertyModel.find().distinct('type');

        res.json({
            message : "A list of property types",
            data : types,
            totalTypes : types.length
        })
    }
    catch(err)
    {
        res.status(500).json({
            message : err
        })
    }
};

exports.updateAProperty = async(req,res)=>{
    try
    {
        const property = await propertyModel.findByIdAndUpdate(req.params.id, req.body, {new : true});

        if(property)
        {
            res.json({
                message : `The property with the id ${req.params.id} was updated`,
                data : property
            })
        }
    }
    catch(err)
    {
        res.status(500).json({
            message : err
        })
    }
}

exports.deleteAProperty = async(req,res)=>{
    try
    {
        const property = await propertyModel.findByIdAndRemove(req.params.id);

        if(property)
        {
            res.json({
                message : `Property with the ID ${req.params.id} was deleted`
            })
        }
        else
        {
            res.status(404).json({
                message : `Property with id ID ${req.params.id} was not found`
            })
        }
    }
    catch(err)
    {
        res.status(500).json({
            message: err
        })
    }

}