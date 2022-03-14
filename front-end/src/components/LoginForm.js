import React from 'react'

const LoginForm = () => {
  return (
            

    <div className= "container">
        <div className="row">
        <div className="col-md-12">
        <h1 style={{marginTop:"30px"}}>Login</h1>
        <hr />
        <form action="" >
            
             <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <input className="form-control" id="email" name="email" type="text" placeholder="Email" required />
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

            <input type="submit" className="btn btn-success" value="Login" />

        </form>
        </div>

        </div>
    </div>

  )
}

export default LoginForm