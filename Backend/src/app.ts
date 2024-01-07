// Import necessary modules and packages
import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";
import { Server } from "socket.io";
import { marked } from "marked";

// Asynchronous function to start the server
async function startServer() {
   // Create an Express application
   const app = express();

   // Use CORS middleware to handle Cross-Origin Resource Sharing
   app.use(cors());

   // Create an HTTP server using the Express app
   const server = http.createServer(app);

   // Create a new instance of Socket.IO and attach it to the server
   const io = new Server(server, {
      cors: {
         origin: "http://localhost:5173", // Allow connections only from this origin
         methods: ["GET", "POST"], // Allow specified HTTP methods
      },
   });

   // Handle socket connection event
   io.on("connection", (socket) => {
      // Listen for "markdownUpdate" event from clients
      socket.on("markdownUpdate", (markdownUpdate) => {
         // Convert the received markdown to HTML using the 'marked' library
         const html = marked(markdownUpdate);

         // Broadcast the HTML update to all connected clients (except the sender)
         socket.broadcast.emit("htmlUpdate", html);
      });
   });

   // Define the port for the server to listen on, defaulting to 5000 if not specified in the environment
   const PORT = process.env.PORT || 5000;

   // Start the server and listen on the specified port
   server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
   });
}

// Call the startServer function to initiate the server setup and start it
startServer();
