import React from 'react';
import {Link} from "react-router-dom";

import {DropdownButton, Dropdown} from 'react-bootstrap'


const Header = () => {


    return(
    
    <header>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
            <nav className="container">
                
                <a className="navbar-brand" ><img src={require("../img/logo.png")} alt="logo" width="30" height="24"/> Rest-Inn</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/properties">Property Listing </Link>
                        </li>
                        <li className="nav-item dropdown">
                        <DropdownButton className="dropdown-basic-button" title="Sign Up/Log In">
                            {/* <Dropdown.Item href="registration">Sign Up</Dropdown.Item> */}
                            <Link to="/registration" className="nav-link" ><div className='dropdown.item'>Sign Up</div></Link>
                            {/* <Dropdown.Item href="login">Log In</Dropdown.Item> */}
                            <Link to="/login" className="nav-link" ><div className='dropdown.item'>Log In</div></Link>
                        </DropdownButton>

                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>)
  };
  
  export default Header;
  