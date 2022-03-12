import { toaster } from "evergreen-ui";
import { useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import "./App.css";
import Home from "./pages/Home";
import Remote from "./pages/Remote";

function App() {
  const socketRef = useRef<Socket | null>(null);
  const [roomName, setRoomName] = useState(""); // should this be null
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    socketRef.current = io("http://localhost:8000");

    socketRef.current.on("room-not-avalible", () => {
      console.log("room not avalible")
      toaster.danger("The room you want to join is unavalible");
    })

    socketRef.current.on("connection-made", () => {
      console.log("connection made")
      // might send inital data?
      setIsConnected(true)
      // should i move this to a useEffect hook?
      navigate("/remote", { replace: true})
    })

    socketRef.current.on("remote-disconnect", () => {
      // reset roomNaame
      setRoomName("");
      setIsConnected(false);
      // navigate back home??
      toaster.danger("This remote has been diconected from the extension")
    })

    return () => {
      socketRef.current?.disconnect();
    }
  }, [])

  const joinRoom = (roomName: string) => {
    setRoomName(roomName);
    console.log(roomName)
    // should move this to a useEffect hook with roomname as dependency?
    socketRef.current?.emit("join-room", roomName);
  };

  const onRemoteButtonClick = (eventName: string) => {
    socketRef.current?.emit("remote-button-click", eventName, roomName);
  };

  const leaveRoom = () => {
    console.log("leave room")
    socketRef.current?.emit("leave-room", roomName);
    setRoomName("");
    setIsConnected(false);
  };

  return (
   
      <Routes>
        <Route path="/" element={<Home joinRoom={joinRoom} />} />
        {/* if it is connected should you still be able to be at home?  */}
        <Route
          path="/remote"
          element={
            <Remote
              isConnected={isConnected}
              onRemoteButtonClick={onRemoteButtonClick}
              leaveRoom={leaveRoom}
            />
          }
        />
      </Routes>
  );
}

export default App;
