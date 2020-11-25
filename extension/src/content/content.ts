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
    }
  });

  port.onDisconnect.addListener(() => {console.log('disconected')});
});
