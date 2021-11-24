function credits() {
    console.log("🛑 Hey! This site was developed by itspolar.dev and stormforcejj.co.uk for stormforcejj.co.uk only.")
    console.log("⚖️ Stealing this code and using it for personal or commercial use is against the law and is strictly prohibited.")
    console.log("--------------------------------------------------------------------------------------------------------------------")
}

function upStats() {
    $.getJSON("https://api.lanyard.rest/v1/users/399940580932714496", (data) => {
        data = data.data;
        if (data.listening_to_spotify) {
            $("#listeningTo").html(` <b>${data.spotify.song}</b> By <i>${data.spotify.artist}</i>`)
        } else {
            $("#spotify").hide()
        }
    })
}

function pctime() {
    var dt = new Date();
    var secondsNew = dt.getSeconds()
    var minutesNew = dt.getMinutes()
    var hoursNew = dt.getHours()

    if (dt.getSeconds() < 10) {
        secondsNew = "0" + dt.getSeconds();
    }

    if (dt.getMinutes() < 10) {
        minutesNew = "0" + dt.getMinutes();
    }

    if (dt.getHours() < 10) {
        hoursNew = "0" + dt.getHours();
    }

    var time = hoursNew + ":" + minutesNew + ":" + secondsNew;
    $("#pctime").html(time)
}

credits()
upStats()
setInterval(credits, 200000)
setInterval(upStats, 20000)
setInterval(pctime, 1000)