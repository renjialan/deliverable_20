var video;

// load video and set autoplay to false
window.addEventListener("load", function() {
    console.log("Good job opening the window")

});

// play video
document.querySelector("#play").addEventListener("click", function() {
     console.log("Play Video");
 });
 // pause video
window.addEventListener("load", function() {
    video = document.getElementById("player1");
    video.autoplay = false;
    video.loop = false;
});
// log play
document.querySelector("#play").addEventListener("click", function() {
    video.play();
    console.log("Video is playing");
    updateVolumeInfo();
});

//  pause video

document.querySelector("#pause").addEventListener("click", function() {
    video.pause();
    console.log("Video is paused");
});
// slow down video
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate -= 0.1;
    console.log("New speed: " + video.playbackRate);
});
// speed up video
document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate += 0.1;
    console.log("New speed: " + video.playbackRate);
});
// skip ahead video
document.querySelector("#skip").addEventListener("click", function() {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log("Current location: " + video.currentTime);
});
// mute video
document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted) {
        video.muted = false;
        this.textContent = "Mute";
    } else {
        video.muted = true;
        this.textContent = "Unmute";
    }
});
// change volume
document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    updateVolumeInfo();
});
// old school
function updateVolumeInfo() {
    
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";

}
// old school
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
