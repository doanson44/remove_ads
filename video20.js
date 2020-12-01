var videoList = document.getElementsByTagName("video");
if(videoList != null && videoList.length > 0) {
    for(var i = 0; i < videoList.length; i++) {
        videoList[i].playbackRate = 2.0;
    }
}