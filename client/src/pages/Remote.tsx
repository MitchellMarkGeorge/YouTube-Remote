import React, { Component } from "react";
import { toaster } from "evergreen-ui";
import Box from "ui-box";

import { RemoteButton } from "../components/RemoteButton";

interface Props {
    onButtonClick: (eventName: string) => void
}
interface State {}

// play/pause, fast foword, playback rate mute
// volume slider

export class Remote extends Component<Props, State> {
  render() {
      console.log('here');
    return (
      <Box position="relative" height="100%" width="100%">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
            {/*  */}
            <Box display="grid" height="100%" width="100%" gap="1rem" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" justifyItems="center"> 
                <RemoteButton buttonName="Play" onClick={this.props.onButtonClick}/>
                <RemoteButton buttonName="Mute" onClick={this.props.onButtonClick}/>
                <RemoteButton buttonName="Forward" onClick={this.props.onButtonClick}/>
                <RemoteButton buttonName="Backward" onClick={this.props.onButtonClick}/>
                <RemoteButton buttonName="Speed Up" onClick={this.props.onButtonClick}/>
                <RemoteButton buttonName="Slow Down" onClick={this.props.onButtonClick}/>
                
            </Box>

        </Box>
      </Box>
    );
  }
}
