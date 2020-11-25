import express from "express";
import { Server, Socket } from "socket.io";
// import http from "http";
import cors from "cors";

const PORT = process.env.port || 5050;
const app = express();
app.use(cors()); 
// const server = http.createServer(app);
const server = app.listen(PORT);
const io = new Server(server, { cors: { origin: '*' } });





let rooms: string[] = [];


io.on("connection", (socket: Socket) => {
  socket.on("create-room", (roomName: string) => {
    // console.log(roomName);

    console.log(roomName);
    if (!rooms.includes(roomName)) {
      rooms.push(roomName);
      socket.join(roomName);
    } else {
      io.to(socket.id).emit("room-not-avalible");
    }
  });

  socket.on("join-room", (roomName, id) => {
    if (rooms.includes(roomName)) {
      socket.join(roomName);
      io.to(roomName).emit("connection-made")
    } else {
      io.to(socket.id).emit("room-not-avalible"); // tell specific socket that room is not avalible
      //
    }

    socket.on("remote-button-click", (eventName: string, roomName: string) => {
        console.log(eventName);
      socket.to(roomName).emit('remote-event', eventName);
    });

    // for (const event of events) {
    //   socket.on(event, (roomName: string) => {
    //     socket.to(roomName).emit(event);
    //   });
    // }
  });
});

// server.listen(PORT, () => {
//   console.log(`Server started at ${PORT}`);
// });
