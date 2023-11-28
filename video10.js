var videoList = document.getElementsByTagName("video");
if (videoList != null && videoList.length > 0) {
    for (var i = 0; i < videoList.length; i++) {
        videoList[i].playbackRate = 1.0;
    }
}

var iframes = document.getElementsByTagName("iframe");

if (iframes != null && iframes.length > 0) {
    for (var i = 0; i < iframes.length; i++) {
        var iframeDocument;
        try {
            iframeDocument = iframes[i].contentWindow.document;
        }
        catch (err) { }

        if (iframeDocument != null) {

            var videos = iframeDocument.getElementsByTagName("video");

            if (videos != null && videos.length > 0) {
                for (var j = 0; j < videos.length; j++) {
                    videos[j].playbackRate = 1.0;
                }
            }
        }
    }
}