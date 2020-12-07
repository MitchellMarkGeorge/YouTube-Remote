console.log("here in content");

chrome.runtime.onConnect.addListener(function (port) {
  const videoElement = document.getElementsByTagName("video")[0];
  port.onMessage.addListener(function ({ event }) {
    switch (event) {
      case "play":
        if (videoElement.paused) {
          videoElement.play();
        } else videoElement.pause();
        break;

      case "mute":
        videoElement.muted = !videoElement.muted;
        break;

      case "forward":
        videoElement.currentTime += 5;
        break;

      case "backward":
        videoElement.currentTime -= 5;
        break;

      case "speed-up":
        videoElement.playbackRate += 0.5;
        break;

      case "slow-down":
        videoElement.playbackRate -= 0.5;
        break;
    }
  });

  port.onDisconnect.addListener(() => {
    console.log("disconected");
  });
});

window.addEventListener("unload", () => {
  chrome.runtime.sendMessage({ request: "page-unload" });
});
