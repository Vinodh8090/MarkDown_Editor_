import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

// Create a socket instance connected to the server
const socket = io("http://localhost:5000");

// Functional component for the HTML preview
export default function Preview() {
   // State to manage the HTML content received from the server
   const [html, setHtml] = useState();

   // Effect hook to handle updates when the socket is active
   useEffect(() => {
      // Check if the socket is active before setting up the event listener
      socket.active &&
         socket.on("htmlUpdate", (data) => {
            // Update the preview pane with the received HTML
            setHtml(data);
         });

      // Clean up the event listener when the component unmounts
      return () => {
         socket.off("htmlUpdate");
      };
   }, [socket]); // Dependency array to re-run the effect when the socket changes

   // JSX structure for the HTML preview component
   return (
      <div className="preview-grid">
         Preview
         {/* Render the HTML content using dangerouslySetInnerHTML */}
         <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
   );
}
