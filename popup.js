// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var play15 = document.getElementById("play15");
  play15.addEventListener('click', function () {
    chrome.tabs.executeScript(null, {
      code: "var videos=document.getElementsByTagName('video');if(videos != null) {for(var i=0; i<videos.length; i++){videos[i].playbackRate=1.5;}}"
    });
  });

  var play1 = document.getElementById("play1");
  play1.addEventListener('click', function () {
    chrome.tabs.executeScript(null, {
      code: "var videos=document.getElementsByTagName('video');if(videos != null) {for(var i=0; i<videos.length; i++){videos[i].playbackRate=1;}}"
    });
  });

  var play2 = document.getElementById("play2");
  play2.addEventListener('click', function () {
    chrome.tabs.executeScript(null, {
      code: "var videos=document.getElementsByTagName('video');if(videos != null) {for(var i=0; i<videos.length; i++){videos[i].playbackRate=2;}}"
    });
  });
});
