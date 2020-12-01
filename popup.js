'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var play15 = document.getElementById("play15");
  play15.addEventListener('click', function () {
    chrome.tabs.executeScript(null, {
      file: "video15.js"
    });
  });

  var play1 = document.getElementById("play1");
  play1.addEventListener('click', function () {
    chrome.tabs.executeScript(null, {
      file: "video10.js"
    });
  });

  var play2 = document.getElementById("play2");
  play2.addEventListener('click', function () {
    chrome.tabs.executeScript(null, {
      file: "video20.js"
    });
  });
});
