import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbarStyles.css";
import logo from "../assets/Markdown-logo.png";

// Functional Component to render Navbar of the application
const Navbar = (props) => {
   return (
      <nav>
         <div className="logo">
            <img src={logo} alt="MKEditor Logo" />
            <label>MK-Editor</label>
         </div>

         <ul>
            <li>
               <NavLink exact to="/" activeClassName="active">
                  Home
               </NavLink>
            </li>
            <li>
               <NavLink to="/editor" activeClassName="active">
                  Editor
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
