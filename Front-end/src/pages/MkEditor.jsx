import React from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import "../styles/mkEditor.css";

export default function MkEditor() {
   return (
      <div className="container">
         <Editor />
         <Preview />
      </div>
   );
}
