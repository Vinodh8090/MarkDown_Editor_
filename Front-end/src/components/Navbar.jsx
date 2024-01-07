import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbarStyles.css";
import logo from "../assets/Markdown-logo.png";

// Functional Component to render Navbar of the application
const Navbar = (props) => {
   return (
      // Navigation bar JSX structure
      <nav>
         {/* Logo section with image and label */}
         <div className="logo">
            <img src={logo} alt="MKEditor Logo" />
            <label>MK-Editor</label>
         </div>

         {/* Navigation links using NavLink for active link styling */}
         <ul>
            {/* Home link */}
            <li>
               <NavLink exact to="/" activeClassName="active">
                  Home
               </NavLink>
            </li>

            {/* Editor link */}
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
