import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

// Create a socket instance connected to the server
const socket = io("http://localhost:5000");

// Functional component for the Markdown editor
export default function Editor() {
   // State to manage the markdown content
   const [markdown, setMarkdown] = useState("");

   // Event handler for changes in the textarea
   const handleChange = (event) => {
      // Extract the value from the textarea
      const { value } = event.target;

      // Update the markdown state with the new value
      setMarkdown(value);

      // Check if the socket is active before emitting the "markdownUpdate" event to the server
      socket.active && socket.emit("markdownUpdate", value);
   };

   // JSX structure for the Markdown editor
   return (
      <div className="edit-grid">
         Editor
         {/* Textarea element bound to the markdown state with onChange event */}
         <textarea value={markdown} onChange={(e) => handleChange(e)} />
      </div>
   );
}
