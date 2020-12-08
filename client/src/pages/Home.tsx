import React, { Component } from "react";
import Box from "ui-box";
import QrReader from "react-qr-reader";
import { Heading, Paragraph, TextInput, toaster } from "evergreen-ui";

// import { Redirect } from "react-router-dom";

interface Props {
    joinRoom: (peerID: string) => void;
    
}
interface State {
  value: string;
  goToRemotePage: boolean
}

export class Home extends Component<Props, State> {
  state: State = { value: "" , goToRemotePage: false };

  onScan = (result: string | null) => {
      //only once???
    if (result && typeof result === 'string') {
      console.log(result);
        this.props.joinRoom(result);
      
      
    
      

    //   successfully connecet toaster
      
    } 
  };

  


  onKeyPress = (event: any) => {
    if (event.key === 'Enter') {
        this.props.joinRoom(this.state.value)
    }
  }

  onError = (err: any) => {
    console.log(err);
    toaster.danger("There was a problem scanning the QRcode");
  };

  onChange = (e: any) => {
    this.setState({ value: e.target.value });
  };

  render() {

  
    return (
      <Box position="relative" height="100%" width="100%">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          
          transform="translate(-50%, -50%)"
        >
          <Heading textAlign="center" marginBottom="8px" size={600}>
            YouTube Remote
          </Heading>
          <Paragraph color="muted" textAlign="center" marginBottom="8px">
            Scan the QRcode created by the extension here.
          </Paragraph>
          <QrReader onScan={this.onScan} onError={this.onError}></QrReader>
          <Box marginTop="8px" textAlign="center">
            <TextInput
              textAlign="center"
              placeholder="Room name"
              value={this.state.value}
              onChange={this.onChange}
              onKeyPress={this.onKeyPress}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}
