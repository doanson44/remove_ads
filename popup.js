'use strict';

document.addEventListener('DOMContentLoaded', function () {
  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  var play15 = document.getElementById("play15");
  play15.addEventListener('click', async function () {
    var tab = await getCurrentTab();
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['video15.js']
    });
  });

  var play1 = document.getElementById("play1");
  play1.addEventListener('click', async function () {
    var tab = await getCurrentTab();
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['video10.js']
    });
  });

  var play175 = document.getElementById("play175");
  play175.addEventListener('click', async function () {
    var tab = await getCurrentTab();
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['video175.js']
    });
  });

  var play2 = document.getElementById("play2");
  play2.addEventListener('click', async function () {
    var tab = await getCurrentTab();
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['video20.js']
    });
  });

  var skipI9bet = document.getElementById("skipI9bet");
  skipI9bet.addEventListener('click', async function () {
    var tab = await getCurrentTab();
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['skipI9bet.js']
    });
  });

  var playMinus025 = document.getElementById("playMinus025");
  playMinus025.addEventListener('click', async function () {
    var tab = await getCurrentTab();
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['playMinus025.js']
    });
  });

  var playPlus025 = document.getElementById("playPlus025");
  playPlus025.addEventListener('click', async function () {
    var tab = await getCurrentTab();
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['playPlus025.js']
    });
  });
});
