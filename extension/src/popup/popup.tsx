import React, { Component } from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";

import "./popup.css";
import Box from "ui-box";
import { Heading, Paragraph, Text } from "evergreen-ui";

interface Props {}
interface State {
  newID?: string;
  initalized: boolean;
}

class Popup extends Component {
  state: State;

  componentDidMount() {
    chrome.runtime.sendMessage({ request: "popup-load" }, (response) => {
      console.log(response);
      this.setState({ ...response });
    });
  }

  getView() {
    if (this?.state?.initalized) {
      return <Heading>Your Remote is alreadey initalized</Heading>;
    } else if (this?.state?.newID) {
      return (
        <>
          <QRCode value={this?.state?.newID} />
          <Heading marginTop="8px">
            Go to *url* on your phone and scan the QRCode to connect your
            remote!
          </Heading>
          <Paragraph color="muted" marginTop="8px">
            {this?.state?.newID}
          </Paragraph>
        </>
      );
    } else return <Heading size={600}>Loading...</Heading>;
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
