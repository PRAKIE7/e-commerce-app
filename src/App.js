import React from "react";
import Login from "./Login";
import "./App.css"; 
import Register from "./Register";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <div className="App">
        <Routes>
          <Route exact path="/signin" element={<Login/>}/>
          <Route exact path="/signin" element={<Login/>}/>
          <Route exact path="/signup" element={<Register/>}/>
          <Route exact path="/contact-us" element={<ContactUs/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
