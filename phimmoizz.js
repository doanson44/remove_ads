var mainPrerollAds = document.getElementById('main_preroll_ads');
var trailerPrerollAds = document.getElementById('pm-trailer-preroll-wrapper');
var ads = document.getElementsByClassName('uniad-zonetype-preload-overlay');

mainPrerollAds?.remove();
trailerPrerollAds?.remove();

if(ads != null) {
    for(var i = 0; i < ads.length; i++) {
        ads[i].remove();
    }
}

var mainPlayer = document.getElementById("media-player-box");
mainPlayer?.addEventListener ("DOMNodeInserted", function(ev) {
    var mainPrerollAds = document.getElementById('main_preroll_ads');
    var trailerPrerollAds = document.getElementById('pm-trailer-preroll-wrapper');
    mainPrerollAds?.remove();
    trailerPrerollAds?.remove();
});