// Create a Node.js application using Socket.IO
// . Establish a socket connection between client and server
// . Log a message when a user connects
// . Log a message when a user disconnects
// . Handle connection errors gracefully


import express from 'express'
import http from 'http'
//install npm install socket.io
import {Server} from 'socket.io'

const app = express()
const server = http.createServer(app);

//Create Socket.IO Server
const io = new Server (server,{
    cors: {
        origin: "*", // allow all clients (for demo)
    }
})












//server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
