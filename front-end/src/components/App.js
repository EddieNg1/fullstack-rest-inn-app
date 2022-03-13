
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from '../pages/HomePage';


function App() {
  return (

    <BrowserRouter>

    <Routes>

      <Route path="/" element={<HomePage  />} />
      {/* <Route path="about" element={<AboutPage />} />
      <Route path="resorts" element={<ResortListingPage  />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="resorts/:id" element={<ResortDescriptionPage />} /> */}


    </Routes>

</BrowserRouter>
  );
}

export default App;
