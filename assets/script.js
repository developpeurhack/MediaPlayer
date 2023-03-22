

// selection 
const video = document.querySelector(".video");
const playToggle = document.querySelector(".play-toggle");
const toggleImg = document.querySelector(".play-toggle img");

// action de click

video.addEventListener("click", toggleplay);
playToggle.addEventListener("click", toggleplay)
function toggleplay() {
    if (video.paused) {
        video.play();
        toggleImg.src = "img/pause.svg"
    }
    else {
        video.pause();
        toggleImg.src="img/play.jpg"
    }

}

// timer 
const timers = document.querySelectorAll(".time-display");
video.addEventListener("loadeddata", elements);
window.addEventListener("load", elements);

let current;
let totalDuration;
function elements(e) {
    current = video.currentTime;
    totalDuration = video.duration;
  //  console.log(totalDuration)
    formatValue(current, timers[0])
    formatValue(totalDuration, timers[1])
}

function formatValue(val, elem) {
    let currentMin = Math.trunc(val / 60);
    let currentSec = Math.trunc(val % 60);
    if (currentSec < 10) { // a partir de 10 affiche  09, 08 ....
        currentSec = `0${currentSec}`
    }
    elem.textContent = `${currentMin}:${currentSec}`
}
// bar de progression

const progress = document.querySelector(".progress");
video.addEventListener("timeupdate", handleTimeUpdate)

function handleTimeUpdate() {
    current = video.currentTime;
    formatValue(current, timers[0])
    const progposition = current / totalDuration;
    progress.style.transform = `scaleX(${progposition})`
    if (video.ended) {
        video.play();
    }

}

// volume 
const volumeSong = document.querySelector('.volume-slider');
volumeSong.addEventListener("change", changeVolume)

function changeVolume() {
    video.volume = volumeSong / 100;
    //console.log(video.volume)
}

innerHTML = `<h1>MyMediaPlayer</h1>
    <div class="video-container">
    <video src="img/La-position-en-CSS-YouTube.mp4" preload="metadata" class="video">
            <source src="ressources/video.mp4" class="video/mp4"> </source>
    </video>
        <div class="controls">
            <div class="progress-bar">
                <div class="progress"></div>
            </div>
            <div class="controls-container">
                <button class="play-toggle">
                    <img src="img/button.svg" alt=""> 
                </button>
                <button class="mute-btn">
                    <img src="img/volume.jpg" alt="">
                </button>
                <input type="range" class="volume-slide" min="0" max="100" value="50" step="1">
                <p class="time">
                    <span class="time-display current"> 00:00<span>
                    <span>/</span>
                    <span class="time-display total">00:00<span>  
                </p>
                
            </div>

        </div>

    </div>`;