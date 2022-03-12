import {
  FastBackwardIcon,
  FastForwardIcon,
  Heading,
  PlayIcon,
  StepForwardIcon,
  VolumeDownIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from "evergreen-ui";
import React from "react";
import { Navigate } from "react-router-dom";
import "./Remote.css";
interface Props {
  isConnected: boolean;
  leaveRoom: () => void;
  onRemoteButtonClick: (eventName: string) => void;
}
const Remote = (props: Props) => {
  if (!props.isConnected) {
    return <Navigate to="/" replace />;
  }

  const makeOnClick = (eventName: string) => {
    return () => {
      props.onRemoteButtonClick(eventName);
    }
  }


  return (
    <div className="remote-container">
      {/* play pause */}
      <div className="remote-button" onClick={makeOnClick("play-pause")}>
        <StepForwardIcon size={20} color="white" />
      </div>
      <div className="remote-button" onClick={makeOnClick("mute")}>
        <VolumeOffIcon size={20} color="white"/>
      </div>
      <div className="remote-button" onClick={makeOnClick("volume-up")}>
        <VolumeUpIcon size={20} color="white"/>
      </div>
      <div className="remote-button" onClick={makeOnClick("volume-down")}>
        <VolumeDownIcon size={20} color="white"/>
      </div>
      <div className="remote-button" onClick={makeOnClick("backward")}>
        <FastBackwardIcon size={20} color="white"/>
      </div>
      <div className="remote-button" onClick={makeOnClick("forward")}>
        <FastForwardIcon size={20} color="white"/>
      </div>
      <div className="remote-button" onClick={props.leaveRoom}>
        <Heading color="white">Disconnect</Heading>
      </div>
    </div>
  );
};

export default Remote;
