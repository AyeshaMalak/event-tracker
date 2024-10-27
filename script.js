// Click Event
let clickCount = 0;
function clickEvent() {
    clickCount++;
    document.getElementById("click-count").innerText = clickCount;
}

// Mouse Over Event
function mouseOverEvent() {
    document.getElementById("mouse-over-status").innerText = "Mouse is over!";
}

// Keyboard Event
function keyboardEvent() {
    document.getElementById("key-status").innerText = "Key pressed!";
}

// Form Submit Event
function submitEvent(event) {
    event.preventDefault();
    document.getElementById("submit-status").innerText = "Form Submitted!";
}

// Window Resize Event
function updateWindowSize() {
    document.getElementById("width").innerText = window.innerWidth;
    document.getElementById("height").innerText = window.innerHeight;
}
window.onresize = updateWindowSize;
updateWindowSize();

// Media Event
function mediaPlay() {
    document.getElementById("media-status").innerText = "Status: Playing";
}
function mediaPause() {
    document.getElementById("media-status").innerText = "Status: Paused";
}
