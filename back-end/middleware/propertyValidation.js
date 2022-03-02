exports.createPropertyValidation = (req,res,next)=>{

    const errors = [];
    
    if(!req.body.title || req.body.title === "")
    {
        errors.push({
            field: "title",
            message: "You must provide a property title"
        })
    }

    if(!req.body.rentalPrice || req.body.rentalPrice === "")
    {
        errors.push({
            field: "rentalPrice",
            message: "You must provide the rental price (per night)"
        })
    }

    if(!req.body.type || req.body.type === "")
    {
        errors.push({
            field: "type",
            message: "You must provide a type (eg. cabin, condo, apartment, etc.)"
        })
    }

    if(!req.body.amenities || req.body.amenities === "")
    {
        errors.push({
            field: "amenities",
            message: "You must provide amenities"
        })
    }

    if(!req.body.location || req.body.location === "")
    {
        errors.push({
            field: "location",
            message: "You must provide a location"
        })
    }

    if(!req.body.hasOwnProperty('bestSeller') || req.body.bestSeller === "")
    {
        errors.push({
            field: "bestSeller",
            message: "You must indicate if the property is a bestseller or not"
        })
    }

    if(errors.length > 0)
    {
        res.status(400).json({
            message: "Failed to create a property",
            data: errors
        })
    }
    else
    {
        next();
    }

}

exports.updatePropertyValidation = (req,res,next)=>{

    const errors = [];
    
    if(req.body.hasOwnProperty('_id'))
    {
        errors.push({
            field: "_id",
            message: "You may NOT update the property id"
        })
    }


    if(req.body.title === "")
    {
        errors.push({
            field: "title",
            message: "You must provide a property title"
        })
    }

    if(req.body.rentalPrice === "")
    {
        errors.push({
            field: "rentalPrice",
            message: "You must provide the rental price (per night)"
        })
    }

    if(req.body.type === "")
    {
        errors.push({
            field: "type",
            message: "You must provide a type (eg. cabin, condo, apartment, etc.)"
        })
    }

    if(req.body.amenities === "")
    {
        errors.push({
            field: "amenities",
            message: "You must provide amenities"
        })
    }

    if(req.body.location === "")
    {
        errors.push({
            field: "location",
            message: "You must provide a location"
        })
    }

    if(req.body.bestSeller === "")
    {
        errors.push({
            field: "bestSeller",
            message: "You must indicate if the property is a bestseller or not"
        })
    }

    if(errors.length > 0)
    {
        res.status(400).json({
            message: "Failed to update property",
            data: errors
        })
    }
    else
    {
        next();
    }

}