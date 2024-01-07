import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Preview() {
   const [html, setHtml] = useState();
   useEffect(() => {
      socket.active &&
         socket.on("htmlUpdate", (data) => {
            setHtml(data); // Update the preview pane with the received HTML
         });
   }, [socket]);

   return (
      <div className="preview-grid">
         <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
   );
}
