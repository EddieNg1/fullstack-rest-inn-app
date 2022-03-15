import React, { useState } from 'react'

const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName: "",
        email : "",
        password: "",
        phoneNumbers: []
    })

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        fetch(`https://powerful-journey-75366.herokuapp.com/customers`,{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        })
        .then(response=>response.json())
        .then(json=>{
            alert((json.message) + "\n" + (json.data.length > 0 ? json.data[0].message : ""));
            setFormData({
                firstName:"",
                lastName: "",
                email : "",
                password: ""
            })
        })
    }


    
  return (
    <div className="container">
      <div className="row">
    <div className="col-md-12">

        <h1 style={{marginTop:"30px"}}>Register</h1>
        <hr />
        <form method="post" action="/register" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">

                        <input className="form-control" id="firstName" name="firstName" type="text" placeholder="First Name" 
                        onChange={handleChange}  />

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">

                        <input className="form-control" id="lastName" name="lastName" type="text" placeholder="Last Name" 
                        onChange={handleChange}  />

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <input className="form-control" id="password" name="password" type="password" placeholder="Password" 
                        onChange={handleChange}  />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <input className="form-control" id="email" name="email" type="email" placeholder="Email Address" 
                        onChange={handleChange}  />
                    </div>
                </div>
            </div>
            <input type="submit" className="btn btn-success" value="Register" />
        </form>


    </div>
</div>
    </div>


  )
}

export default RegistrationForm