import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";
import { Server } from "socket.io";
import { marked } from "marked";

async function startServer() {
   const app = express();
   app.use(cors);
   const server = http.createServer(app);
   const io = new Server(server, {
      cors: {
         origin: "http://localhost:5173",
         methods: ["GET", "POST"],
      },
   });

   io.on("connection", (socket) => {
      socket.on("markdownUpdate", (markdownUpdate) => {
         const html = marked(markdownUpdate);
         socket.broadcast.emit("htmlUpdate", html); // Send converted HTML to client
      });
   });

   const PORT = process.env.PORT || 5000;
   server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
   });
}

startServer();
