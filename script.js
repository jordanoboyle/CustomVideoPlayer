//Get the DOM elements:
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play and Pause Video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//Update Play Pause Icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'; //this turns the icon to pause ()
  }
}

//Update progress and timestamp
function updateProgress() {
  // console.log(video.currentTime);
  // console.log(video.duration);
  // These are two unique ways to test what is going on
  
  let timeRemaining  = video.duration - video.currentTime;
  progress.value = ((video.currentTime / video.duration) * 100);
  console.log(progress.value);
  
  //minutes timestamp
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }
  // seconds timestamp portion
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${mins}:${seconds}`;

}

//Set Video time to progress
function setVideoProgress() {
  video.currentTime = ((+progress.value * video.duration) / 100);
}

//Stop the Video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
  // This API does not have a video.stop, so you have to manipulate the system a little.
  //Use .currentTime and .pause()
}

//Event Listeners (This can be an outline of the functions that need to be written)
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);