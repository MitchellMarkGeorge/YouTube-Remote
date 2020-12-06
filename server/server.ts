// import express from "express";
// import Server, { Socket } from "socket.io";
// import http from "http";
// import cors from "cors";

import { createServer } from "http";
import Server = require("socket.io");
import { Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer);

const PORT = process.env.port || 5050;
// // const app = express();
// // app.use(cors())
// // const server = app.listen(PORT);
// const server = http.createServer(PORT);
// const io = new Server(server); // do i need this?





let rooms: string[] = []; // might not need this

io.sockets.adapter

io.on("connection", (socket: Socket) => {
  function sendRoomError(err?: any) {
    if (err) console.log(err);
    io.to(socket.id).emit("room-not-avalible");
  }
  socket.on("create-room", (roomName: string) => {
    // console.log(roomName);

    console.log(roomName);
    if (!rooms.includes(roomName)) {
      rooms.push(roomName);
      socket.join(roomName, sendRoomError);
    } else {
      io.to(socket.id).emit("room-not-avalible");
    }
  });

  socket.on("join-room", (roomName) => {
    if (rooms.includes(roomName)) {
      socket.join(roomName, sendRoomError);
      io.to(roomName).emit("connection-made");
    } else {
      // io.to(socket.id).emit("room-not-avalible"); // tell specific socket that room is not avalible
      sendRoomError();
      //
    }

    socket.on("remote-button-click", (eventName: string, roomName: string) => {
      console.log(eventName);
      socket.to(roomName).emit("remote-event", eventName);
    });
  });
});

// server.listen(PORT, () => {
//   console.log(`Server started at ${PORT}`);
// });

httpServer.listen(PORT);
