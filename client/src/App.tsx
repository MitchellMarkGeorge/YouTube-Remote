import Peer from "peerjs";
import { Home } from "./pages/Home";
import { Remote } from "./pages/Remote";
import React, { Component } from "react";
import { toaster } from "evergreen-ui";
import { v4 as uuid } from "uuid";

interface State {
  peer?: Peer;
  connection?: Peer.DataConnection;
}

export class App extends Component<{}, State> {
  state: State = {
    peer: new Peer(uuid()),
  };


  componentDidMount() {
    this.state.peer?.on("close", () => {
      if (this.state.connection) {
        this.setState({ connection: undefined });
      }
    });

    this.state.peer?.on("error", (e) => {
      console.log(e);
      toaster.danger("Error occored");
    });

    this.state.peer?.on("disconnect", () => {
      console.log("Disconnected");
      if (this.state.connection) {
        this.setState({ connection: undefined });
      }
    });
  }

  onButtonClick = (eventName: string) => {
    // this.state.peer.emit("remote-button-click", eventName, this.roomName);
    this.state.connection?.send(eventName);
  };

  joinRoom = (peerID: string) => {
    // console.log(this.socket);
    // this.socket.emit("join-room", roomName);

    const connection = this.state.peer?.connect(peerID);
    this.setState({ connection }, this.setConnectionListeners)
    // this.roomName = roomName; // or put in state??
  };

  setConnectionListeners = () => {
    // should i wait for the open event???
    this.state.connection?.on("error", (err) => {
      console.log(err);
      toaster.danger("Error occored");
    })

    this.state.connection?.on("close", () => {
      this.setState({ connection: undefined })
    })
  }

  componentWillUnmount() {
    this.state.peer?.destroy()
  }
  render() {
    if (this.state.connection) {
      return <Remote onButtonClick={this.onButtonClick} />;
    } else {
      return <Home joinRoom={this.joinRoom} />;
    }
  }
}

