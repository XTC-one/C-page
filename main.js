const audio = document.getElementById('audio')
const playPause = document.getElementById('play_pause')
var rangSlider = document.getElementById('rang_slider')

const currentMin = document.getElementById('current_min')
const currentSec = document.getElementById('current_sec')

const tottalMin = document.getElementById('tottal_min')
const tottalSec = document.getElementById('tottal_sec')

const playIconCon = document.getElementById('play_icon_con')
const pauseIconCon = document.getElementById('pause_icon_con')

const downBtn = document.getElementById("down_btn")

var isMouseDow = false
var isAudioPlaying = false;

function playAudio() {
    audio.play()
    audio.loop = true
    playIconCon.classList.replace('show_play_pause', 'hide_play_pause')
    pauseIconCon.classList.replace('hide_play_pause', 'show_play_pause')
}
function pasueAudio() {
    audio.pause()
    audio.loop = false
    playIconCon.classList.replace('hide_play_pause', 'show_play_pause')
    pauseIconCon.classList.replace('show_play_pause', 'hide_play_pause')
}

rangSlider.addEventListener('input', () => {
    audio.currentTime = rangSlider.value
    updateRangSilder()
})

audio.addEventListener("play", () => {
    isAudioPlaying = true
    playAudio()

})
audio.addEventListener("pause", () => {
    isAudioPlaying = false
    pasueAudio()


})
audio.addEventListener("ended", () => {
})

playPause.addEventListener('click', () => {
    if (isAudioPlaying == false) {
        playAudio()
    } else {
        pasueAudio()
    }
    rangSlider.max = audio.duration
})

// Rang Silder
rangSlider.addEventListener("mousedown", () => {
    isMouseDow = true
})
rangSlider.addEventListener("mouseup", () => {
    isMouseDow = false
    updateRangSilder()

})
function updateRangSilder() {
    if (isMouseDow == false) {
        rangSlider.value = audio.currentTime
    }
    if (Math.floor(audio.currentTime / 60).toString().length == 1) {
        currentMin.innerText = `0${Math.floor(audio.currentTime / 60)}`
    }

    if (Math.floor(audio.currentTime - (60 * (Math.floor(audio.currentTime / 60)))).toString().length == 1) {
        currentSec.innerText = `0${Math.floor(audio.currentTime - (60 * (Math.floor(audio.currentTime / 60))))}`
    } else {
        currentSec.innerText = `${Math.floor(audio.currentTime - (60 * (Math.floor(audio.currentTime / 60))))}`

    }

    //Tottal duration
    if (Math.floor(audio.duration / 60).toString().length == 1) {
        tottalMin.innerText = `0${Math.floor(audio.duration / 60)}`
    }

    if (Math.floor(audio.duration - (60 * (Math.floor(audio.duration / 60)))).toString().length == 1) {
        tottalSec.innerText = `0${Math.floor(audio.duration - (60 * (Math.floor(audio.duration / 60))))}`
    } else {
        tottalSec.innerText = `${Math.floor(audio.duration - (60 * (Math.floor(audio.duration / 60))))}`

    }


}

setInterval(updateRangSilder, 1000)

downBtn.addEventListener("click", () =>  {
    window.open(audio.src, '_blank');
})