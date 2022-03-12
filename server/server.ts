import { Server, Socket } from "socket.io";

const PORT = 8000;

const io = new Server(PORT, {
  cors: {
    origin: "*",
  },
});

const roomExists = (roomName: string) => io.sockets.adapter.rooms.has(roomName);

io.on("connection", (socket: Socket) => {
  socket.on("create-room", (roomName: string) => {
    // only the EXTENSION will call emit this event
    console.log(`room created ${roomName}`);
    if (roomExists(roomName)) {
      io.to(socket.id).emit("room-not-avalible");
    } else {
      socket.join(roomName);
      // ONLY join/create a room that DOES NOT exist
    }
  });

  socket.on("join-room", (roomName: string) => {
    // only the REMOTE will call emit this event
    // might includde some more inital data about the state if the video at that moment
    if (roomExists(roomName)) {
      socket.join(roomName);
      console.log(`joined room ${roomName}`);
      // ONLY join room that exists
      io.in(roomName).emit("connection-made"); // both EXTENSION and REMOTE receive this event
    } else {
      io.to(socket.id).emit("room-not-avalible");
    }
  });

  socket.on("remote-button-click", (eventName: string, roomName: string) => {
    // only the REMOTE emits/calls this event
    console.log(eventName);
    socket.to(roomName).emit("remote-event", eventName); // only the EXTENSION receives/listens to this event (the REMOTE does not receive this event)
  });

  socket.on("leave-room", (roomName: string) => {
    // both EXTENSION and REMOTE can call this event
    if (roomExists(roomName)) {
      socket.leave(roomName);
      socket.to(roomName).emit("remote-disconnect"); // alert other side of this disconnect
    } else {
      io.to(socket.id).emit("room-not-avalible");
    }
  });

  socket.on("disconnecting", () => {
    const curerentRoom = Array.from(socket.rooms).filter(
      (room) => room != socket.id
    );
    if (curerentRoom) {
      socket.to(curerentRoom).emit("remote-disconnect"); // let other client know of disconnect is happening
    }
  });
});
