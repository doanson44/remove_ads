document.getElementById('ad_top_banner')?.remove();
document.getElementById('pm-trailer-preroll-wrapper');

var mainPlayer = document.getElementById("media-player-box");
mainPlayer?.addEventListener ("DOMNodeInserted", function(ev) {
    var mainPrerollAds = document.getElementById('main_preroll_ads');
    var trailerPrerollAds = document.getElementById('pm-trailer-preroll-wrapper');
    mainPrerollAds?.remove();
    trailerPrerollAds?.remove();
});