import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from '../pages/HomePage';
import LoginPage from "../pages/LoginPage";
import PropertyListingPage from '../pages/PropertyListingPage';
import RegistrationPage from '../pages/RegistrationPage';
import PropertyDescriptionPage from '../pages/PropertyDescriptionPage'

const App = () =>{
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage  />} />
        <Route path="properties" element={<PropertyListingPage />} />

        <Route path="registration" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        
        <Route path="properties/:id" element={<PropertyDescriptionPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
