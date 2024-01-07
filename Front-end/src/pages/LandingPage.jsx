import React from "react";
import { Link } from "react-router-dom";
import markdownImg from "../assets/markdown.png";
import "../styles/landingPage.css";

// Functional component for the Landing Page
export default function LandingPage() {
   return (
      // Main container for the Landing Page
      <div>
         {/* Header section with title, description, and "Get Started" button */}
         <header className="header">
            <div className="inner_header">
               <h1>Markdown Editor</h1>
               <p>Create and edit Markdown documents with ease.</p>
               <div className="get_started">
                  {/* Link to the editor page */}
                  <Link to="/editor" className="get_started_button">
                     Get Started
                  </Link>
               </div>
            </div>
         </header>

         {/* Features section with feature cards */}
         <section className="main-section">
            <h2>Features</h2>
            <div className="feature-cards">
               {/* Individual feature card with image, title, and description */}
               <div className="feature-card">
                  <img
                     className="feature-img"
                     src={markdownImg}
                     alt="Markdown Feature"
                  />
                  <h3>Simple and intuitive interface</h3>
                  <p>Easy-to-use interface for seamless editing.</p>
               </div>

               <div className="feature-card">
                  <img
                     className="feature-img"
                     src={markdownImg}
                     alt="Markdown Feature"
                  />
                  <h3>Real-time preview</h3>
                  <p>See your changes instantly with real-time preview.</p>
               </div>

               <div className="feature-card">
                  <img
                     className="feature-img"
                     src={markdownImg}
                     alt="Markdown Feature"
                  />
                  <h3>Export to HTML or other formats</h3>
                  <p>Export your Markdown documents to various formats.</p>
               </div>

               <div className="feature-card">
                  <img
                     className="feature-img"
                     src={markdownImg}
                     alt="Markdown Feature"
                  />
                  <h3>Customizable themes</h3>
                  <p>Personalize your editor with customizable themes.</p>
               </div>
            </div>
         </section>

         {/* Footer section with copyright information */}
         <footer className="footer">
            &copy; 2024 Markdown Editor. All rights reserved.
         </footer>
      </div>
   );
}
