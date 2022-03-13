import React from 'react';
import {Link} from "react-router-dom";

import {DropdownButton, Dropdown} from 'react-bootstrap'


const Header = () => {


    return(
    
    <header>
      <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                <a className="navbar-brand" ><img src={require("../img/logo.png")} alt="logo" width="30" height="24"/> Rest-Inn</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Properties Listing</a>
                        </li>
                        <li className="nav-item dropdown">
                        <DropdownButton id="dropdown-basic-button" title="Sign Up/Log In">
                            <Dropdown.Item href="#/action-1">Sign Up</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Log In</Dropdown.Item>
                        </DropdownButton>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>)
  };
  
  export default Header;
  