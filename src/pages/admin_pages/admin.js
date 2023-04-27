import React from "react";
import "./users.js";
import"./exams.js";
import "./admin.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Admin= () => {
  
    return (
        <>
 <ul className="navbar-nav">
      
      <li> <Link  to={"./users.js"}>Users</Link> </li>
      <li><Link  to={"./post.js"}>exams</Link> </li>
      
    </ul>
    
     </>

    )
}
export default Admin;