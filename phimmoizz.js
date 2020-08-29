var mainPrerollAds = document.getElementById('main_preroll_ads');
var trailerPrerollAds = document.getElementById('pm-trailer-preroll-wrapper');

mainPrerollAds?.remove();
trailerPrerollAds?.remove();

var mainPlayer = document.getElementById("media-player-box");
mainPlayer?.addEventListener ("DOMNodeInserted", function(ev) {
    var mainPrerollAds = document.getElementById('main_preroll_ads');
    var trailerPrerollAds = document.getElementById('pm-trailer-preroll-wrapper');
    mainPrerollAds?.remove();
    trailerPrerollAds?.remove();
});