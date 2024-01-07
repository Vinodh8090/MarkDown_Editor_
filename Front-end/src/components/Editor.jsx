import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Editor() {
   const [markdown, setMarkdown] = useState("");

   const handleChange = (event) => {
      const { value } = event.target;
      setMarkdown(value);
      socket.active && socket.emit("markdownUpdate", value);
   };

   return (
      <div class="edit-grid">
         <textarea value={markdown} onChange={(e) => handleChange(e)} />
      </div>
   );
}
