import React, { Component } from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";

import "./popup.css";
import Box from "ui-box";
import { Button, Heading, Paragraph, Text } from "evergreen-ui";

interface Props {}
interface State {
  peerID?: string;
  connected: boolean;
}

class Popup extends Component {
  state: State;

  componentDidMount() {
    chrome.runtime.sendMessage({ request: "popup-load" }, (response) => {
      console.log(response);
      this.setState({ ...response });
    });
  }

  disconnectRemote = () => {
    chrome.runtime.sendMessage({ request: "disconnect-remote" });
  };

  getView() {
    if (this?.state?.connected) {
      return (
        <>
          <Heading color="white">Your Remote is already connected.</Heading>
          <Button
            marginTop="8px"
            intent="danger"
            onClick={this.disconnectRemote}
          >
            Disconnect
          </Button>
        </>
      );
    } else if (this?.state?.peerID) {
      return (
        <>
          <QRCode value={this?.state?.peerID} />
          <Paragraph color="white"  marginTop="8px">
            Go to <b>https://yt-remote.netlify.app</b> on your phone and scan the
            QRCode to connect your remote!
          </Paragraph>
          <Paragraph color="white" marginTop="8px">
            {this?.state?.peerID}
          </Paragraph>
        </>
      );
    } else return <Heading color="white" size={600}>Loading...</Heading>;
  }

  render() {
    return (
      <Box position="relative" height="100%" width="100%">
        <Box
          position="absolute"
          top="50%"
          left="50%"
          color="#47B881"
          transform="translate(-50%, -50%)"
        >
          {this.getView()}
        </Box>
      </Box>
    );
  }
}

ReactDOM.render(<Popup />, document.getElementById("root"));
