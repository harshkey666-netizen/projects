const speedup = document.getElementById("speedup");
const slowdown = document.getElementById("slowdown");
const volumeup = document.getElementById("volumeup");
const volumedown = document.getElementById("volumedown");
const videobtn = document.getElementById("videobtn");
const videoinput = document.getElementById("videoinput");
const videoplayer = document.querySelector("main");

const speeduphandler = function () {
    const videoelement = document.querySelector(".videoelement");
    if(videoelement == null) {
        return;
    }
    const increasspeed = videoelement.playbackRate + 0.25;
    videoelement.playbackRate = increasspeed;
    
};

speedup.addEventListener("click", speeduphandler);

const slowdownhandler = function () {
    const videoelement = document.querySelector(".videoelement");
    if(videoelement == null) {
        return;
    }
    const decreasespeed = videoelement.playbackRate - 0.25;
    videoelement.playbackRate = decreasespeed;
};

slowdown.addEventListener("click", slowdownhandler);

const handleinput = () => {
    videoinput.click();
};

videobtn.addEventListener("click", handleinput);

const accepthandler = (obj) => {
    const selectedvideo = obj.target.files[0];
    const link = URL.createObjectURL(selectedvideo);

    const videoelement = document.createElement("video");
    videoelement.setAttribute("class", "videoelement");

    videoelement.src = link;
    videoelement.controls = true;

    videoplayer.appendChild(videoelement);
    videoelement.play();
};

videoinput.addEventListener("change", accepthandler);

speedup.addEventListener("click", speeduphandler);
slowdown.addEventListener("click", slowdownhandler);
volumeup.addEventListener("click",volumeuphandler);

