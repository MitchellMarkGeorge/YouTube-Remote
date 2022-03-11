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

const ENDPOINT = "http://localhost:3000";

const RemoteButton = () => {
  const roomName = nanoid(); // shluld this be in state/use effect?

  const socketRef = useRef<Socket | null>(null); // using ref incase of re renders (think about this)

  const [hasConnected, setHasConnected] = useState(true);
  // useEffect(() => {
  //     socketRef.current = io(ENDPOINT);
  //     socketRef.current.emit

  //     return () => {
  //         socketRef.current?.disconnect();
  //     }
  // })

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
              <Button marginTop="1rem" intent="danger">Disconect</Button>
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
