import React from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import "../styles/mkEditor.css";

// Functional component for the Markdown Editor container
export default function MkEditor() {
   return (
      // Main container div with a specified class
      <div className="container">
         {/* Render the Editor component */}
         <Editor />

         {/* Render the Preview component */}
         <Preview />
      </div>
   );
}
