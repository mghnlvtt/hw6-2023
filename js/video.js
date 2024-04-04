var video = document.getElementById("player1");

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    document.getElementById("volume").innerHTML=video.volume*100+"%";
    video.autoplay = false;
    video.loop = false;
})

document.querySelector("#pause").addEventListener("click", function(){
    console.log("Video Paused");
    video.pause();
})

document.querySelector("#play").addEventListener("click", function(){
    console.log("Video Played");
    video.play();
    updateVolume();
});

document.querySelector("#slower").addEventListener("click", function(){
    video.playbackRate -= 0.1;
    console.log("New video speed: "+video.playbackRate*100+"%");

});

document.querySelector("#skip").addEventListener("click", function(){
    video.currentTime += 15;
    console.log("New location in video: "+video.currentTime);
    if (video.currentTime>67.4033) {
        console.log("Restarting video");
        video.currentTime = 0;
        video.play();
    }
});

document.querySelector("#faster").addEventListener("click", function(){
    video.playbackRate += 0.1;
    console.log("New video speed: "+video.playbackRate*100+"%");

});

document.querySelector("#slider").addEventListener("input", function(){
    console.log("Volume Adjustment")
    // document.getElementById("volume").innerHTML=video.volume*0+"%"
    video.volume = this.value/100;
    console.log(video.volume = this.value/100);
    // var volumeValue = this.value
    updateVolume();
});





document.querySelector("#mute").addEventListener("click", function(){
    var buttontext = document.getElementById("mute");
    if (video.muted) {
        console.log("Video is unmuted");
        video.muted = false;
        buttontext.innerHTML = "Mute";
    } else {
        console.log("Video is muted");
        video.muted = true;
        buttontext.innerHTML = "Unmute";
    }
});

document.querySelector("#vintage").addEventListener("click", function(){
    document.documentElement.classList.toggle('oldSchool');
});

document.querySelector("#orig").addEventListener("click", function(){
    document.documentElement.classList.remove('oldSchool');
});

function updateVolume(){
    console.log("Updated Volume Level:"+video.volume*100);
    document.getElementById("volume").innerHTML=video.volume*100+"%";
};
