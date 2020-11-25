import { io, Socket } from 'socket.io-client';
import { StateManager , getUniqueRoomName } from './utils';


let socket: Socket = null
let port: chrome.runtime.Port;

const popuprule: chrome.events.Rule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: "www.youtube.com", pathContains: "watch", schemes: ['https', 'http']  }, //youtube.com/watch // could posea problem with urlContains
    }),
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()],
};

// how to 

chrome.runtime.onInstalled.addListener(function (details) {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([popuprule]);
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.request === 'popup-load') {
        
        if (socket) {
            // should also send the room name
            sendResponse({ socketInitalized: true });
            socket.disconnect();
            socket = null;
        } else {
            const newRoomName = initiateSocket();
            sendResponse({ newRoomName });
        }
    }

    return true;
})

function initiateSocket() {
    socket = io('http://localhost:5050');

    const roomName = getUniqueRoomName();
    // console.log(roomName)
    socket.emit("create-room", roomName); // another fun name
    
    socket.on("room-not-avalible", () => {
        console.log('room name already taken');
    });

    // socket.on("connection-made", () => {
    //     chrome.tabs.query({ url: "*://youtube.com/watch*"}, result => {
    //         port = chrome.tabs.connect(result[0].id);
    //     })
        
    // })

    socket.on('remote-event', (event: string) => {
        // port.postMessage({ event })
        console.log(event);
        // chrome.tabs.query({ url: "https://www.youtube.com/watch?v=5-TKfOzwu9w"}, result => {
        //       console.log(result);
              
        //       port = chrome.tabs.connect(result[0].id);
        //   })
        if (!port) {
            chrome.tabs.query({ active: true, currentWindow: true }, result => {
             port = chrome.tabs.connect(result[0].id);
             port.postMessage({ event })
         })
        } else {
            port.postMessage({ event });
        }
        
        
    })

    
    return roomName; 
}


