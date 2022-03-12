import {
  Heading,
  Popover,
  Paragraph,
  Strong,
  ThumbsUpIcon,
  Button,
  AntennaIcon,
} from "evergreen-ui";
import React, { useEffect, useRef, useState } from "react";
import "../content.css";
import QRCode from "qrcode.react";
import { nanoid } from "nanoid";
import { io, Socket } from "socket.io-client";

const ENDPOINT = "http://localhost:8000";

const RemoteButton = () => {
  //   const roomName = nanoid(); // shluld this be in state/use effect?
  const [roomName, setRoomName] = useState(nanoid());
  const socketRef = useRef<Socket | null>(null); // using ref incase of re renders (think about this)
  const videoElement = document.querySelector("video");

  const [hasConnected, setHasConnected] = useState(false);
  useEffect(() => {
    socketRef.current = io(ENDPOINT);
    socketRef.current.emit("create-room", roomName);

    socketRef.current.on("connection-made", () => {
      console.log("connection made");
      setHasConnected(true);
    });

    socketRef.current.on("remote-disconnect", () => {
      console.log("remote disconnection");
      const newRoomName = nanoid();
      socketRef.current?.emit("create-room", newRoomName);
      setRoomName(newRoomName);
      setHasConnected(false);
      socketRef.current?.emit("create-room", roomName);
    });

    socketRef.current.on("room-not-avalible", () => {
      // some jink of notifier
      console.log("no room ", roomName);
    });

    socketRef.current.on("remote-event", (eventName: string) => {
      console.log(eventName);
      handleRemoteEvents(eventName);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  const leaveRoom = () => {
    console.log("leave room");
    socketRef.current?.emit("leave-room", roomName);
    const newRoomName = nanoid();
    socketRef.current?.emit("create-room", newRoomName);
    setRoomName(newRoomName);
    setHasConnected(false);
    // create the new room for the use next time
  };

  const handleRemoteEvents = (eventName: string) => {
    if (videoElement != null) {
      switch (eventName) {
        case "play-pause":
          if (videoElement?.paused) {
            videoElement.play();
          } else videoElement?.pause();
          break;

        case "mute":
          videoElement.muted = !videoElement.muted;
          break;

        case "forward":
          videoElement.currentTime += 5;
          break;

        case "backward":
          videoElement.currentTime -= 5;
          break;

        case "volume-up":
          console.log(videoElement.volume);
          if (videoElement.volume < 1) {
            videoElement.volume = parseFloat(
              (videoElement.volume + 0.1).toFixed(1)
            );
          }

          break;

        case "volume-down":
          console.log(videoElement.volume);
          if (videoElement.volume > 0) {
            videoElement.volume = parseFloat(
              (videoElement.volume - 0.1).toFixed(1)
            );
          }
          break;
      }
    }
  };

  return (
    <Popover
      content={
        <div className="yt-remote-qrcode-container">
          {hasConnected ? (
            <div>
              <AntennaIcon size={30} />
              <Paragraph color="white" marginTop="1rem">
                A remote is currently connected.
              </Paragraph>
              <Button onClick={leaveRoom} marginTop="1rem" intent="danger">
                Disconect
              </Button>
            </div>
          ) : (
            <div>
              <Heading color="white" size={700} marginBottom="1rem">
                Youtube Remote
              </Heading>
              <QRCode value={roomName} />
              <Paragraph color="white" marginTop="1rem">
                Scan QRCode to connect to remote
              </Paragraph>
              <Paragraph marginTop="1rem" color="white">
                Room ID: <Strong color="white">{roomName}</Strong>
              </Paragraph>
            </div>
          )}
        </div>
      }
    >
      <img
        className="yt-remote-image"
        src={chrome.runtime.getURL("icons/ytremote.png")}
      />
    </Popover>
  );
};

export default RemoteButton;
