function credits() {
    console.log("🛑 Hey! This site was developed by itspolar.dev and stormforcejj.co.uk for stormforcejj.co.uk only.")
    console.log("⚖️ Stealing this code and using it for personal or commercial use is against the law and is strictly prohibited.")
    console.log("--------------------------------------------------------------------------------------------------------------------")
}

function upStats() {
    $.getJSON("https://api.lanyard.rest/v1/users/399940580932714496", (data) => {
        data = data.data;

        if (data.listening_to_spotify) {
            $("#spotify-np").css("color", "white");
            $("#listeningTo").html(` <b>${data.spotify.song}</b> By <i>${data.spotify.artist}</i>`)
        } else {
            $("#spotify-np").fadeOut();
            $("#spotify-np").css("color", "black");
        }
    })
}

function pctime() {
    var dt = new Date();
    var s = dt.getUTCSeconds()
    var m = dt.getUTCMinutes()
    var h = dt.getUTCHours()

    if (dt.getUTCSeconds() < 10) {
        s = "0" + dt.getUTCSeconds();
    }

    if (dt.getUTCMinutes() < 10) {
        m = "0" + dt.getUTCMinutes();
    }

    if (dt.getUTCHours() < 10) {
        h = "0" + dt.getUTCHours();
    }

    var time = h + ":" + m + ":" + s;
    $("#pctime").html(time)
}

credits()
upStats()
setInterval(credits, 200000)
setInterval(upStats, 20000)
setInterval(pctime, 1000)