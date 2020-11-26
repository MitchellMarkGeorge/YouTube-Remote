import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Remote } from "./pages/Remote";
import  io, { Socket } from 'socket.io-client';
import React, { Component } from "react";
import { toaster } from "evergreen-ui";

interface State {}

export class App extends Component {
  state: State = {};
  socket!: typeof Socket;
  roomName!: string;
  // socket: Socket = io('http://localhost:5050')

  componentDidMount() { 
    this.socket = io("https://yt-remote-extension.herokuapp.com/");
    // console.log(this.socket);
    this.socket.on("room-not-avalible", () => {
      toaster.danger("The room you want to join is unavalible");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected");
    });
  }

  onButtonClick = (eventName: string) => {
    this.socket.emit("remote-button-click", eventName, this.roomName);
  };

  joinRoom = (roomName: string) => {
    // console.log(this.socket);
    this.socket.emit("join-room", roomName);
    this.roomName = roomName; // or put in state??
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home joinRoom={this.joinRoom} />
          </Route>
          <Route path="/remote">
            <Remote onButtonClick={this.onButtonClick} />
          </Route>
        </Switch>
      </BrowserRouter>

      // <Remote onButtonClick={this.onButtonClick}/> // show home if socket disconnects
      //just pass socket??
    );
  }
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="remote">
//           <Remote />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
