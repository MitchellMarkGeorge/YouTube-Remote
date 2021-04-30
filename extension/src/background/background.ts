import Peer from "peerjs";
import { v4 as uuid } from "uuid";

let peer: Peer = null;
// make it with sockets
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
    if (connection) {

      sendResponse({ connected: true });
      
    } else {
      const peerID = peer ? peer.id : initiatePeer();
      sendResponse({ peerID });
    }
  } else if (message.request === 'disconnect-remote') {
    reset();
  }

  return true;
});


function sendEvent(event: string) {
  console.log(event)
  // creates a port for communication with content script
  // snds over the event that was received from the remote
  if (!port) {
    chrome.tabs.query({ active: true, currentWindow: true }, (result) => {
      port = chrome.tabs.connect(result[0].id);
      port.postMessage({ event });

      port.onDisconnect.addListener(() => {
        console.log('Disconnected port');
        reset(true);
      })
    });
  } else {
    port.postMessage({ event });
  }
}

function reset(isPortDisconnected?: boolean) {
  // if (port) {
  //   port.disconnect();
  // }
  if (isPortDisconnected) {
    port && port.disconnect();
  }
    port = null;
    peer && peer.destroy(); // also closes connectioon
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
