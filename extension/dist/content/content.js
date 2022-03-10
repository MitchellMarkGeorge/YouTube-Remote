/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content/utils.ts":
/*!******************************!*\
  !*** ./src/content/utils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.waitForElement = void 0;
function waitForElement(selector) {
    return new Promise(function (resolve) {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }
        var observer = new MutationObserver(function () {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
exports.waitForElement = waitForElement;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./src/content/content.ts ***!
  \********************************/

//use this link to mount react button to page https://stackoverflow.com/questions/50790222/react-how-to-update-props-of-root-component
// import React from "react";
// import ReactDOM from "react-dom";
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/content/utils.ts");
console.log("here in content");
var videoElement = document.querySelector("video");
console.log(videoElement);
// const observer = new MutationObserver(() => {
//   document.contains
// })
// does the maifest.json still need the document_end part?
(0, utils_1.waitForElement)("ytd-menu-renderer").then(function (elm) {
    console.log("here", elm);
});
// const menu = document.querySelector("ytd-menu-renderer");
var extensionContainer = document.createElement("yt-remote-ext");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC9jb250ZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFnQixjQUFjLENBQUMsUUFBZ0I7SUFDN0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxpQkFBTztRQUN4QixJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNqRDtRQUVELElBQU0sUUFBUSxHQUFHLElBQUksZ0JBQWdCLENBQUM7WUFDcEMsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNwQyxPQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDOUIsU0FBUyxFQUFFLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQWxCRCx3Q0FrQkM7Ozs7Ozs7VUNuQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7QUN0QkEsc0lBQXNJO0FBQ3RJLDZCQUE2QjtBQUM3QixvQ0FBb0M7O0FBRXBDLDJFQUF5QztBQUV6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDL0IsSUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRTFCLGdEQUFnRDtBQUNoRCxzQkFBc0I7QUFDdEIsS0FBSztBQUNMLDBEQUEwRDtBQUMxRCwwQkFBYyxFQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQUc7SUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBQ0YsNERBQTREO0FBQzVELElBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7QUFnQmxFLHlEQUF5RDtBQUN6RCx3RkFBd0Y7QUFDeEYsc0RBQXNEO0FBQ3RELHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckIscUNBQXFDO0FBQ3JDLGlDQUFpQztBQUNqQyx1Q0FBdUM7QUFDdkMsaUJBQWlCO0FBRWpCLHFCQUFxQjtBQUNyQixvREFBb0Q7QUFDcEQsaUJBQWlCO0FBRWpCLHdCQUF3QjtBQUN4Qix5Q0FBeUM7QUFDekMsaUJBQWlCO0FBRWpCLHlCQUF5QjtBQUN6Qix5Q0FBeUM7QUFDekMsaUJBQWlCO0FBRWpCLHlCQUF5QjtBQUN6Qiw0Q0FBNEM7QUFDNUMsaUJBQWlCO0FBRWpCLDBCQUEwQjtBQUMxQiw0RUFBNEU7QUFDNUUsaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUixRQUFRO0FBRU4sd0NBQXdDO0FBQ3hDLGdDQUFnQztBQUNoQyxNQUFNO0FBRU4sNENBQTRDO0FBQzVDLHVCQUF1QjtBQUN2Qix3R0FBd0c7QUFDeEcsTUFBTTtBQUNSLE1BQU07QUFFTiw0Q0FBNEM7QUFDNUMscUdBQXFHO0FBQ3JHLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHRlbnNpb24vLi9zcmMvY29udGVudC91dGlscy50cyIsIndlYnBhY2s6Ly9leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXh0ZW5zaW9uLy4vc3JjL2NvbnRlbnQvY29udGVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiB3YWl0Rm9yRWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKTogUHJvbWlzZTxFbGVtZW50IHwgbnVsbD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSlcbiAgICB9XG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSkge1xuICAgICAgICByZXNvbHZlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKVxuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHtcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIHN1YnRyZWU6IHRydWVcbiAgICB9KTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy91c2UgdGhpcyBsaW5rIHRvIG1vdW50IHJlYWN0IGJ1dHRvbiB0byBwYWdlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUwNzkwMjIyL3JlYWN0LWhvdy10by11cGRhdGUtcHJvcHMtb2Ytcm9vdC1jb21wb25lbnRcbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc29sZS5sb2coXCJoZXJlIGluIGNvbnRlbnRcIik7XG5jb25zdCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIik7XG5jb25zb2xlLmxvZyh2aWRlb0VsZW1lbnQpO1xuXG4vLyBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbi8vICAgZG9jdW1lbnQuY29udGFpbnNcbi8vIH0pXG4vLyBkb2VzIHRoZSBtYWlmZXN0Lmpzb24gc3RpbGwgbmVlZCB0aGUgZG9jdW1lbnRfZW5kIHBhcnQ/XG53YWl0Rm9yRWxlbWVudChcInl0ZC1tZW51LXJlbmRlcmVyXCIpLnRoZW4oZWxtID0+IHtcbiAgY29uc29sZS5sb2coXCJoZXJlXCIsIGVsbSk7XG59KVxuLy8gY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ5dGQtbWVudS1yZW5kZXJlclwiKTtcbmNvbnN0IGV4dGVuc2lvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ5dC1yZW1vdGUtZXh0XCIpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBjaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHBvcnQpIHtcbi8vICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ2aWRlb1wiKVswXTsgLy8gcXVlcnlTZWxlY3RvcigpP1xuLy8gICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoeyBldmVudCB9KSB7XG4vLyAgICAgc3dpdGNoIChldmVudCkge1xuLy8gICAgICAgY2FzZSBcInBsYXlcIjpcbi8vICAgICAgICAgaWYgKHZpZGVvRWxlbWVudC5wYXVzZWQpIHtcbi8vICAgICAgICAgICB2aWRlb0VsZW1lbnQucGxheSgpO1xuLy8gICAgICAgICB9IGVsc2UgdmlkZW9FbGVtZW50LnBhdXNlKCk7XG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICBjYXNlIFwibXV0ZVwiOlxuLy8gICAgICAgICB2aWRlb0VsZW1lbnQubXV0ZWQgPSAhdmlkZW9FbGVtZW50Lm11dGVkO1xuLy8gICAgICAgICBicmVhaztcblxuLy8gICAgICAgY2FzZSBcImZvcndhcmRcIjpcbi8vICAgICAgICAgdmlkZW9FbGVtZW50LmN1cnJlbnRUaW1lICs9IDU7XG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICBjYXNlIFwiYmFja3dhcmRcIjpcbi8vICAgICAgICAgdmlkZW9FbGVtZW50LmN1cnJlbnRUaW1lIC09IDU7XG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICBjYXNlIFwic3BlZWQtdXBcIjpcbi8vICAgICAgICAgdmlkZW9FbGVtZW50LnBsYXliYWNrUmF0ZSArPSAwLjU7XG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICBjYXNlIFwic2xvdy1kb3duXCI6XG4vLyAgICAgICAgIHZpZGVvRWxlbWVudC5wbGF5YmFja1JhdGUgLT0gMC41OyAvLyBUSEVSRSBTSE9VTEQgQkUgQSBUSFJFU0hIT0xEXG4vLyAgICAgICAgIGJyZWFrO1xuLy8gICAgIH1cbi8vICAgfSk7XG5cbiAgLy8gcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiZGlzY29uZWN0ZWRcIik7XG4gIC8vIH0pO1xuXG4gIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsICgpID0+IHtcbiAgLy8gICBwb3J0LmRpc2Nvbm5lY3QoKTtcbiAgLy8gICAvLyBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHJlcXVlc3Q6IFwicGFnZS11bmxvYWRcIiB9KTsgLy8gc2hvdWxkIGkgY2FsbCBkaXNjb25uZWN0IGZyb20gaGVyZT8/P1xuICAvLyB9KTtcbi8vIH0pO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLCAoKSA9PiB7XG4vLyAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgcmVxdWVzdDogXCJwYWdlLXVubG9hZFwiIH0pOyAvLyBzaG91bGQgaSBjYWxsIGRpc2Nvbm5lY3QgZnJvbSBoZXJlPz8/XG4vLyB9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==