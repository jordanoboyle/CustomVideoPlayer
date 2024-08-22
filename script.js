//Get the DOM elements:
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play and Pause Video
function toggleVideoStatus() {
  return true;
}

//Update Play Pause Icon
function updatePlayIcon() {
  return true;
}

//Update progress and timestamp
function updateProgress() {
  return true;
}

//Set Video time to progress
function setVideoProgress() {
  return true;  
}

//Stop the Video
function stopVideo() {
  return true;
}

//Event Listeners (This can be an outline of the functions that need to be written)
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress)