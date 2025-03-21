import React from "react";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div>
      {/* <Signin/>
      <Signup /> 
      <Dashboard/> */}
      <Navbar/>
      <LandingPage/>
    </div>
  );
};

export default App;
