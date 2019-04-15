console.log("netartstart.js imported!");
/*
	Because of Google Chrome autoplay policy, the user must
	interact with the page before a video can play
	The HTML file has a div for the user to click
*/
var firstB = document.getElementById("firstb");
var secondB = document.getElementById("secondb");
var video = document.getElementById("video");
video.volume = 0.2;
var text = document.getElementById("text");
var playBox = document.getElementById("playBox");


function init() {
    
	// Add an event listener to the play box
	// HTML DOM events: https://www.w3schools.com/jsref/dom_obj_event.asp 
	playBox.addEventListener("click", start);
}

function start() {
	// Make the play box invisible
	playBox.style.display = "none";
	// Show the video (hidden in CSS)
	video.style.display = "block";
    video.loop = true;
	// Play the video
	video.play();
    firstB.onclick = pageOne;
}

function pageOne(){
	video.src = "video/introShutOff.mp4";
    firstB.innerHTML = "Sigh.";
    secondB.style.display = "none";
    firstB.onclick = pageMiddle;
    video.loop = false;
}

function pageZero(){ 
    video.src = "video/ceilingFanPageZero.mp4";
    text.innerHTML = "";
    video.loop = false;
    secondB.style.display = "none";
    firstB.innerHTML = "Goodnight.";
    firstB.onclick = reloadPage;
}

function pageMiddle(){
    text.innerHTML = "I have class in an hour.";
    text.style.width = "400px";
    video.loop = true;
    firstB.innerHTML = "Get Up";
    secondB.style.display = "inline-block";
    video.src = "video/ceilingFanPageOne.mp4"
    firstB.onclick = pageTwo;
}

function pageTwo(){
    text.style.width = "110px";
    video.loop = true;
    text.innerHTML = "8:15am";
    video.src = "video/ceilingFanPageTwo.mp4";
    firstB.onclick = pageThree;
}

function pageThree(){
    text.innerHTML = "8:30am";
    video.src = "video/ceilingFanPageThree.mp4";
    firstB.onclick = pageFour;
}

function pageFour(){
    text.innerHTML = "8:45am";
    video.src = "video/ceilingFanPageFour.mp4";
    firstB.onclick = pageFive;
}

function pageFive(){
    text.innerHTML = "9:00am";
    // Change to video 3
    video.src = "video/ceilingFanPageFive.mp4";
    firstB.onclick = pageSix;
}

function pageSix(){
    text.style.width = "500px";
    text.style.borderRight = "none";
    text.innerHTML = "im late now <br> it doesnt matter anyway<br> nothing does anymore";
    video.src = "video/ceilingFanPageSix.mp4";
    firstB.innerHTML = "Give Up";
    secondB.style.display = "none";
    firstB.onclick = pageZero;
}

function reloadPage(){
    location.reload();
}

//run init function after window loads
window.onload = init();

