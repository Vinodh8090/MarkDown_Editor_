import React from "react";
import { Link } from "react-router-dom";
import markdownImg from "../assets/markdown.png";
import "../styles/landingPage.css";

export default function LandingPage() {
   return (
      <div>
         <header className="header">
            <div className="inner_header">
               <h1>Markdown Editor</h1>
               <p>Create and edit Markdown documents with ease.</p>
               <div className="get_started">
                  <Link to="/editor" className="get_started_button">
                     Get Started
                  </Link>
               </div>
            </div>
         </header>

         <section className="main-section">
            <h2>Features</h2>
            <div className="feature-cards">
               <div className="feature-card">
                  <img className="feature-img" src={markdownImg} />
                  <h3>Simple and intuitive interface</h3>
                  <p>Easy-to-use interface for seamless editing.</p>
               </div>

               <div className="feature-card">
                  <img className="feature-img" src={markdownImg} />
                  <h3>Real-time preview</h3>
                  <p>See your changes instantly with real-time preview.</p>
               </div>

               <div className="feature-card">
                  <img className="feature-img" src={markdownImg} />
                  <h3>Export to HTML or other formats</h3>
                  <p>Export your Markdown documents to various formats.</p>
               </div>

               <div className="feature-card">
                  <img className="feature-img" src={markdownImg} />
                  <h3>Customizable themes</h3>
                  <p>Personalize your editor with customizable themes.</p>
               </div>
            </div>
         </section>

         <footer className="footer">
            &copy; 2024 Markdown Editor. All rights reserved.
         </footer>
      </div>
   );
}
