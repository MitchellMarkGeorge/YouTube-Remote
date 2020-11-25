/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************************!*\
  !*** ./src/content/content.ts ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("\r\nchrome.runtime.onConnect.addListener(function (port) {\r\n    var videoElement = document.getElementsByTagName(\"video\")[0];\r\n    port.onMessage.addListener(function (_a) {\r\n        var event = _a.event;\r\n        switch (event) {\r\n            case \"play\":\r\n                if (videoElement.paused) {\r\n                    videoElement.play();\r\n                }\r\n                else\r\n                    videoElement.pause();\r\n                break;\r\n            case \"mute\":\r\n                videoElement.muted = !videoElement.muted;\r\n                break;\r\n        }\r\n    });\r\n    port.onDisconnect.addListener(function () { console.log('disconected'); });\r\n});\r\n\n\n//# sourceURL=webpack://ytremote-extension/./src/content/content.ts?");
/******/ })()
;