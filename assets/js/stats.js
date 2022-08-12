function credits() {
    console.log("🛑 Hey! This site was developed by itspolar.dev and stormforcejj.co.uk for stormforcejj.co.uk only.")
    console.log("⚖️ Stealing this code and using it for personal or commercial use is against the law and is strictly prohibited.")
    console.log("📂 © stormforcejj.co.uk  •  2022")
    console.log("--------------------------------------------------------------------------------------------------------------------")
}

function upStats() {
    $.getJSON("https://api.lanyard.rest/v1/users/399940580932714496", (data) => {
        data = data.data;

        if (data.listening_to_spotify) {
            $("#spotify-np").fadeIn();
            $("#spotify-np").css("color", "white");
            $(".spotify-icon").fadeIn();
            $(".spotify-icon").css("color", "white");
            $("#listeningTo").html(` <b>${data.spotify.song}</b> By <i>${data.spotify.artist}</i>`)
        } else {
            $("#spotify-np").fadeOut();
            $("#spotify-np").css("color", "black");
            $(".spotify-icon").fadeOut();
            $(".spotify-icon").css("color", "black");
        }
    })
}

function isActive() {
    $.getJSON("https://api.lanyard.rest/v1/users/399940580932714496", (data) => {
        data = data.data;

        if (data.discord_status == "online") {
            $("#activeIcon").css("color", "#57F287");
            $("#activeIcon").addClass("fa-circle");
        } else if (data.discord_status == "idle") {
            $("#activeIcon").css("color", "#faa81a");
            $("#activeIcon").addClass("fa-moon");
        } else if (data.discord_status == "dnd") {
            $("#activeIcon").css("color", "#ED4245");
            $("#activeIcon").addClass("fa-do-not-enter");
        } else {
            $("#activeIcon").css("color", "#747f8d");
            $("#activeIcon").addClass("fa-scrubber");
        }

        if (data.active_on_discord_mobile == true) {
            $("#activeIcon").removeClass("fa-circle");
            $("#activeIcon").removeClass("fa-moon");
            $("#activeIcon").removeClass("fa-do-not-enter");
            $("#activeIcon").removeClass("fa-scrubber");
            $("#activeIcon").addClass("fa-mobile-screen-button");
        }
    })
}

// function pctime() {
//     var dt = new Date();
//     var s = dt.getUTCSeconds()
//     var m = dt.getUTCMinutes()
//     var h = dt.getUTCHours()

//     if (dt.getUTCSeconds() < 10) {
//         s = "0" + dt.getUTCSeconds();
//     }

//     if (dt.getUTCMinutes() < 10) {
//         m = "0" + dt.getUTCMinutes();
//     }

//     if (dt.getUTCHours() < 10) {
//         h = "0" + dt.getUTCHours();
//     }

//     var time = h + ":" + m + ":" + s;
//     $("#pctime").html(time)
// }

credits()
upStats()
isActive()
setInterval(credits, 200000)
setInterval(upStats, 20000)
setInterval(isActive, 20000)
    // setInterval(pctime, 1000)