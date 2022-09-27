function modalPopulate() {
    $.getJSON("https://api.lanyard.rest/v1/users/399940580932714496", (data) => {
        data = data.data;
        str = `${data.spotify.song}`;
        if (str.length > 22) {
            $("h2").css("font-size", "1.5rem")
        }
        imgUrl = `${data.spotify.album_art_url}`;
        $("#spotifyName").html(`${data.spotify.song}`)
        $("#spotifyArtist").html(`${data.spotify.artist}`)
        $("#spotifyAlbum").html(`${data.spotify.album}`)
        $("#spotifyCover").attr("src", imgUrl);
        $("#spotifyListenButton").attr("href", "https://open.spotify.com/track/" + `${data.spotify.track_id} ` + "?si=2fec1694e8d94dda");
    })
}

function showModal() {
    modalPopulate();
    $(".spotify-modal").addClass("active");
}

function hideModal() {
    $(".spotify-modal").fadeOut();
    $(".spotify-modal").removeClass("active");
}

$(document).mouseup(function(e) {
    var container = $(".spotify-modal");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        hideModal();
    }
});