function credits() {
    console.log("🛑 Hey! This site was developed by itspolar.dev and stormforcejj.co.uk for stormforcejj.co.uk only.")
    console.log("⚖️ Stealing this code and using it for personal or commercial use is against the law and is strictly prohibited.")
    console.log("--------------------------------------------------------------------------------------------------------------------")
}

// function upStats() {
//     $.getJSON("https://api.lanyard.rest/v1/users/399940580932714496", (data) => {
//         data = data.data;
//         if (data.listening_to_spotify) {
//             $("#spotify-s").html(`<b>${data.spotify.song}</b> `)
//             $("#spotify-a").html(`By <i>${data.spotify.artist}</i>`)
//         } else {
//             $("#spotify-s").html(`Not listening to anything.`)
//             $("#spotify-a").html(``)
//         }
//     })
// }

upStats()

setInterval(upStats, credits, 20000)