/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/content/content.ts ***!
  \********************************/
//use this link to mount react button to page https://stackoverflow.com/questions/50790222/react-how-to-update-props-of-root-component
console.log("here in content");
var videoElement = document.querySelector("video");
console.log(videoElement);
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC9jb250ZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0lBQXNJO0FBQ3RJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUMvQixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUIseURBQXlEO0FBQ3pELHdGQUF3RjtBQUN4RixzREFBc0Q7QUFDdEQsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixxQ0FBcUM7QUFDckMsaUNBQWlDO0FBQ2pDLHVDQUF1QztBQUN2QyxpQkFBaUI7QUFFakIscUJBQXFCO0FBQ3JCLG9EQUFvRDtBQUNwRCxpQkFBaUI7QUFFakIsd0JBQXdCO0FBQ3hCLHlDQUF5QztBQUN6QyxpQkFBaUI7QUFFakIseUJBQXlCO0FBQ3pCLHlDQUF5QztBQUN6QyxpQkFBaUI7QUFFakIseUJBQXlCO0FBQ3pCLDRDQUE0QztBQUM1QyxpQkFBaUI7QUFFakIsMEJBQTBCO0FBQzFCLDRFQUE0RTtBQUM1RSxpQkFBaUI7QUFDakIsUUFBUTtBQUNSLFFBQVE7QUFFTix3Q0FBd0M7QUFDeEMsZ0NBQWdDO0FBQ2hDLE1BQU07QUFFTiw0Q0FBNEM7QUFDNUMsdUJBQXVCO0FBQ3ZCLHdHQUF3RztBQUN4RyxNQUFNO0FBQ1IsTUFBTTtBQUVOLDRDQUE0QztBQUM1QyxxR0FBcUc7QUFDckcsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4dGVuc2lvbi8uL3NyYy9jb250ZW50L2NvbnRlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy91c2UgdGhpcyBsaW5rIHRvIG1vdW50IHJlYWN0IGJ1dHRvbiB0byBwYWdlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzUwNzkwMjIyL3JlYWN0LWhvdy10by11cGRhdGUtcHJvcHMtb2Ytcm9vdC1jb21wb25lbnRcbmNvbnNvbGUubG9nKFwiaGVyZSBpbiBjb250ZW50XCIpO1xuY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpO1xuY29uc29sZS5sb2codmlkZW9FbGVtZW50KTtcbi8vIGNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocG9ydCkge1xuLy8gICBjb25zdCB2aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInZpZGVvXCIpWzBdOyAvLyBxdWVyeVNlbGVjdG9yKCk/XG4vLyAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uICh7IGV2ZW50IH0pIHtcbi8vICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4vLyAgICAgICBjYXNlIFwicGxheVwiOlxuLy8gICAgICAgICBpZiAodmlkZW9FbGVtZW50LnBhdXNlZCkge1xuLy8gICAgICAgICAgIHZpZGVvRWxlbWVudC5wbGF5KCk7XG4vLyAgICAgICAgIH0gZWxzZSB2aWRlb0VsZW1lbnQucGF1c2UoKTtcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgIGNhc2UgXCJtdXRlXCI6XG4vLyAgICAgICAgIHZpZGVvRWxlbWVudC5tdXRlZCA9ICF2aWRlb0VsZW1lbnQubXV0ZWQ7XG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICBjYXNlIFwiZm9yd2FyZFwiOlxuLy8gICAgICAgICB2aWRlb0VsZW1lbnQuY3VycmVudFRpbWUgKz0gNTtcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgIGNhc2UgXCJiYWNrd2FyZFwiOlxuLy8gICAgICAgICB2aWRlb0VsZW1lbnQuY3VycmVudFRpbWUgLT0gNTtcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgIGNhc2UgXCJzcGVlZC11cFwiOlxuLy8gICAgICAgICB2aWRlb0VsZW1lbnQucGxheWJhY2tSYXRlICs9IDAuNTtcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgIGNhc2UgXCJzbG93LWRvd25cIjpcbi8vICAgICAgICAgdmlkZW9FbGVtZW50LnBsYXliYWNrUmF0ZSAtPSAwLjU7IC8vIFRIRVJFIFNIT1VMRCBCRSBBIFRIUkVTSEhPTERcbi8vICAgICAgICAgYnJlYWs7XG4vLyAgICAgfVxuLy8gICB9KTtcblxuICAvLyBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coXCJkaXNjb25lY3RlZFwiKTtcbiAgLy8gfSk7XG5cbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgKCkgPT4ge1xuICAvLyAgIHBvcnQuZGlzY29ubmVjdCgpO1xuICAvLyAgIC8vIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgcmVxdWVzdDogXCJwYWdlLXVubG9hZFwiIH0pOyAvLyBzaG91bGQgaSBjYWxsIGRpc2Nvbm5lY3QgZnJvbSBoZXJlPz8/XG4gIC8vIH0pO1xuLy8gfSk7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsICgpID0+IHtcbi8vICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyByZXF1ZXN0OiBcInBhZ2UtdW5sb2FkXCIgfSk7IC8vIHNob3VsZCBpIGNhbGwgZGlzY29ubmVjdCBmcm9tIGhlcmU/Pz9cbi8vIH0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9