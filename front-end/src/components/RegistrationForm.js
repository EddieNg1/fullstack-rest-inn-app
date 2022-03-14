import React from 'react'

const RegistrationForm = () => {


  return (
    <div className="container">
      <div className="row">
    <div className="col-md-12">

        <h1 style={{marginTop:"30px"}}>Register</h1>
        <hr />
        <form method="post" action="/register">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">

                        <input className="form-control" id="firstName" name="firstName" type="text" placeholder="First Name" required />

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">

                        <input className="form-control" id="lastName" name="lastName" type="text" placeholder="Last Name" required />

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <input className="form-control" id="password" name="password" type="password" placeholder="Password" required />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <input className="form-control" id="email" name="email" type="email" placeholder="Email Address" required />
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