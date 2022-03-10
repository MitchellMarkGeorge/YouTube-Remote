//use this link to mount react button to page https://stackoverflow.com/questions/50790222/react-how-to-update-props-of-root-component
// import React from "react";
// import ReactDOM from "react-dom";

import { waitForElement } from "./utils";

console.log("here in content");
const videoElement = document.querySelector("video");
console.log(videoElement);

// const observer = new MutationObserver(() => {
//   document.contains
// })
// does the maifest.json still need the document_end part?
waitForElement("ytd-menu-renderer").then(elm => {
  console.log("here", elm);
})
// const menu = document.querySelector("ytd-menu-renderer");
const extensionContainer = document.createElement("yt-remote-ext")















// chrome.runtime.onConnect.addListener(function (port) {
//   const videoElement = document.getElementsByTagName("video")[0]; // querySelector()?
//   port.onMessage.addListener(function ({ event }) {
//     switch (event) {
//       case "play":
//         if (videoElement.paused) {
//           videoElement.play();
//         } else videoElement.pause();
//         break;

//       case "mute":
//         videoElement.muted = !videoElement.muted;
//         break;

//       case "forward":
//         videoElement.currentTime += 5;
//         break;

//       case "backward":
//         videoElement.currentTime -= 5;
//         break;

//       case "speed-up":
//         videoElement.playbackRate += 0.5;
//         break;

//       case "slow-down":
//         videoElement.playbackRate -= 0.5; // THERE SHOULD BE A THRESHHOLD
//         break;
//     }
//   });

  // port.onDisconnect.addListener(() => {
  //   console.log("disconected");
  // });

  // window.addEventListener("unload", () => {
  //   port.disconnect();
  //   // chrome.runtime.sendMessage({ request: "page-unload" }); // should i call disconnect from here???
  // });
// });

// window.addEventListener("unload", () => {
//   chrome.runtime.sendMessage({ request: "page-unload" }); // should i call disconnect from here???
// });
