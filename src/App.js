import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import('./App.css')

const App = () => {
  return (
    <>
   
    <ul className="navbar-nav">
   <li> <a href="http://127.0.0.1:5500/src/pages/main/index.html#">Home</a></li>
      <li> <Link to={"/login"}>Login </Link></li>
      <li> <Link to={"/sign up"}>Sign up</Link></li>

    </ul>
    

     <Outlet />
  
    </>
  );
};

export default App;

