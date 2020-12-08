import Peer from "peerjs";
import { v4 as uuid } from "uuid";

let peer: Peer = null;
let connection: Peer.DataConnection = null;
let port: chrome.runtime.Port = null;

const popupRule: chrome.events.Rule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {
        hostEquals: "www.youtube.com",
        pathContains: "watch",
        schemes: ["https", "http"],
      }, //youtube.com/watch // could posea problem with urlContains
    }),
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()],
};



chrome.runtime.onInstalled.addListener(function (details) {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([popupRule]);
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.request === "popup-load") {
    if (peer) {
      // should also send the room name
      sendResponse({ initalized: true });
      // peer.disconnect();
      // peer = null;
      // connection.close();
    } else {
      const newID = initiatePeer();
      sendResponse({ newID });
    }
  } else if (message.request === "page-unload" || message.request === 'disconnect-remote') {
    reset();
  }

  return true;
});

function sendEvent(event: string) {
  console.log(event)
  if (!port) {
    chrome.tabs.query({ active: true, currentWindow: true }, (result) => {
      port = chrome.tabs.connect(result[0].id);
      port.postMessage({ event });
    });
  } else {
    port.postMessage({ event });
  }
}

function reset() {
  // if (port) {
  //   port.disconnect();
  // }
    port && port.disconnect();
    peer && peer.destroy();
    peer = null;
    connection = null;
  
}

function initiatePeer() {
  const id = uuid();
  peer = new Peer(id);

  peer.on("connection", (conn) => {
    connection = conn;

    connection.on("data", sendEvent);

    connection.on("close", reset);

    connection.on("error", (err) => {
      console.error(err);
    });
  });

  peer.on("error", console.error);

  // peer.on("disconnected", () => {
  //   console.log("disconnected");
  //   reset();
  // });

  peer.on("close", reset) // dont call this??

 

  

  return peer.id;
}
