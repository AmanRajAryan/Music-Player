var bg = document.getElementById('bg');
bg.play();


var favicon = document.querySelector('link[rel="shortcut icon"]') ||
              document.querySelector('link[rel="icon"]');
              
              
              
              
              

const player = document.getElementById('player');

const mAudioBtn = document.getElementById('mAudio');


const mVideoBtn = document.getElementById('mVideo');

const avChanger = document.getElementById('avChanger');

const video = document.getElementById('video');


const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById('pauseBtn');
const music = document.getElementById('music');
const progressBar = document.getElementById('progressBar');

const playedDur = document.getElementById('playedDur');

const musicLength = document.getElementById('musicLength');






const preMusicBtn = document.getElementById('preSong');

const nextMusicBtn = document.getElementById('nextSong');


const cover = document.getElementById('cover');





function play() {
    music.play();
    playBtn.style.zIndex = "-9";
    pauseBtn.style.zIndex = "9";
    playBtn.style.visibility = 'hidden'
    pauseBtn.style.visibility = 'visible'
   
    
    
    
    
if(mVideoBtn.style.background !=""){
    
     playBtn.style.zIndex = "-9";
    pauseBtn.style.zIndex = "9";
    playBtn.style.visibility = 'hidden'
    pauseBtn.style.visibility = 'visible';
    music.pause();
    video.play();
    
    }
    
}

function pause() {
    music.pause();
    playBtn.style.zIndex = "9";
    pauseBtn.style.zIndex = "-9";
    pauseBtn.style.visibility = 'hidden'
    playBtn.style.visibility = 'visible'
    
    if(mVideoBtn.style.background != ""){
        playBtn.style.zIndex = "9";
    pauseBtn.style.zIndex = "-9";
    playBtn.style.visibility = 'visible'
    pauseBtn.style.visibility = 'hidden';
    music.pause();
    video.pause();
    
    }
}
playBtn.addEventListener('click' , play);


pauseBtn.addEventListener('click' , pause);







function playBtnState() {
if(music.paused ) {
        playBtn.style.visibility = "visible"
        pauseBtn.style.visibility = "hidden"
    }


  
if ( !video.paused || !music.paused) {
        pauseBtn.style.visibility = "visible"
        playBtn.style.visibility = "hidden"
        loader.style.visibility = "hidden"
        
    }
    
  
    
    
    
    
    }

setInterval(playBtnState , 10);
















function progressBarUpdate() {
   var musicPer = music.currentTime/music.duration;
   musicPer = musicPer*100;
  
  if(mVideoBtn.style.background == "") {
     video.currentTime = music.currentTime;}
     
     if(mVideoBtn.style.background !=          "") {   if(!music.paused) {
         
   music.pause();}
     music.currentTime = video.currentTime;}
   
   progressBar.value = musicPer;
   
   var musicDurMinute = music.duration /60;
   
   musicDurMinute = musicDurMinute.toString().substr(0 , 2).replace('.' , '');
   
   var musicDurSec = music.duration % 60;
  musicDurSec = "0" + musicDurSec.toString().substr(0 , 2).replace('.' , '');
   
   
   
   
   if (musicDurSec.length >= 3) {
   
     musicDurSec = musicDurSec.toString().substr(1 , 2) ; 
   }
   
   
   var length = document.getElementById('length')
   
  length.innerHTML =  musicDurMinute + ":" + musicDurSec;
   
   
   
    musicLength.innerHTML = musicDurMinute + ":" + musicDurSec;
   
   
   musicPlayed = music.currentTime;
   
   
   musicPlayedMinute = musicPlayed / 60;
   
   musicPlayedMinute = 0 + musicPlayedMinute.toString().substr(0 , 2).replace('.' , '');
   
   
   
   musicPlayedSec =   musicPlayed % 60;
   
   musicPlayedSec = "0" +  musicPlayedSec.toString().substr(0 , 2).replace('.' , '');
   
   
   if(musicPlayedSec.length == 3) {
       musicPlayedSec = musicPlayedSec.substr(1 , 2);
   }
   
   
   
   
   playedDur.innerHTML =  musicPlayedMinute + ':' + musicPlayedSec;




   
   
   if(mVideoBtn.style.background != "") {
   
       var musicPer = video.currentTime/video.duration;
   musicPer = musicPer*100;
  
   
   progressBar.value = musicPer;
   
   var musicDurMinute = video.duration /60;
   
   musicDurMinute = musicDurMinute.toString().substr(0 , 2).replace('.' , '');
   
   var musicDurSec = video.duration % 60;
  musicDurSec = "0" + musicDurSec.toString().substr(0 , 2).replace('.' , '');
   
   
   
   
   if (musicDurSec.length >= 3) {
   
     musicDurSec = musicDurSec.toString().substr(1 , 2) ; 
   }
   
   
   var length = document.getElementById('length')
   
  length.innerHTML =  musicDurMinute + ":" + musicDurSec;
   
   
   
    musicLength.innerHTML = musicDurMinute + ":" + musicDurSec;
   
   
   musicPlayed = video.currentTime;
   
   
   musicPlayedMinute = musicPlayed / 60;
   
   musicPlayedMinute = 0 + musicPlayedMinute.toString().substr(0 , 2).replace('.' , '');
   
   
   
   musicPlayedSec =   musicPlayed % 60;
   
   musicPlayedSec = "0" +  musicPlayedSec.toString().substr(0 , 2).replace('.' , '');
   
   
   if(musicPlayedSec.length == 3) {
       musicPlayedSec = musicPlayedSec.substr(1 , 2);
   }
   
   
   
   
   playedDur.innerHTML =  musicPlayedMinute + ':' + musicPlayedSec  }}
   
setInterval(progressBarUpdate , 1000);










function musicTimeUpdate() {
var progressBarValuePer = progressBar.value /100;

    music.currentTime = music.duration * progressBarValuePer;
   
    video.currentTime = video.duration * progressBarValuePer;}



progressBar.addEventListener('touchend' , musicTimeUpdate);

























var backBtn = document.getElementById('back');

var loader = document.getElementById('loader');


function playerDown() {
cover.style.animationName = 'coverDown';
if(mVideoBtn.style.background != "") {
    
video.style.width = "95px"

video.style.top = "15px"
video.style.borderRadius = '7px'
//video.style.padding = "17px 0px"
video.style.left = "2px"
cover.style.visibility = 'hidden';
}
backwardSkipBtn.style.width = '0px';
forwardSkipBtn.style.width = '0px';

avChanger.style.visibility = "hidden";
loader.style.width = "40px"
loader.style.height = "40px"
loader.style.top = "15px"
loader.style.border ="6px solid rgba(0, 0, 0, 0.1)"
loader.style.borderLeftColor = "#3498db"
loader.style.left = "25px"

    player.style.animationName = "playerDown";
    
    player.style.bottom = '0';
    
    
    var length = document.getElementById('length');
    length.style.visibility = "visible";
    
    
    length.style.animationName = "lengthDown";
    
    
    
    playBtn.style.animationName = "playBtnDown";
    
    backBtn.style.animationName = "backDown";
    
    pauseBtn.style.animationName = "pauseBtnDown"
    
    preMusicBtn.style.animationName = "preSongDown";
    
    nextMusicBtn.style.animationName =
    "nextSongDown" ;
    
    progressBar.style.animationName = "progressBarDown";
    
    
    playedDur.style.animationName = "playedDurDown";
    
    
    setTimeout( () =>
  {player.style.height = "10vh";} , 400);
    
}




backBtn.addEventListener('click' , playerDown)


    


function playerUp() {

video.style.width = "400px"
video.style.right = "-400px"
video.style.top = "85px"
if (mVideoBtn.style.background != "") {
    cover.style.visibility = "hidden"
}
video.style.padding = "0px"
video.style.left = ""

setTimeout( ()=>{
  avChanger.style.visibility = "visible";});
 
  loader.style.width = "200px"
loader.style.height = "200px"
loader.style.top = "70px"
loader.style.border ="23px solid rgba(0, 0, 0, 0.1)"
  loader.style.borderLeftColor = "#3498db"
  loader.style.left = ""
  
  var length = document.getElementById('length');
    length.style.visibility = "hidden";
  
  player.style.animationName = "playerUp";
 
    //length.style.animationName = "lengthUp";
    
    cover.style.animationName = 'coverUp'
    
    playBtn.style.animationName = "playBtnUp";
    
    backBtn.style.animationName = "backUp";
    
    pauseBtn.style.animationName = "pauseBtnUp"
    
    preMusicBtn.style.animationName = "preSongUp";
    
    nextMusicBtn.style.animationName =
    "nextSongUp" ;
    
    progressBar.style.animationName = "progressBarUp";
    
    
    playedDur.style.animationName = "playedDurUp";
    
    setTimeout( () =>
  {player.style.height = "100vh";} , 400);
    
  
}




player.addEventListener('touchmove' , playerUp);







var loader = document.getElementById('loader')















function loaderHide() {
    loader.style.visibility = "hidden"
}



music.addEventListener("playing" , loaderHide);

video.addEventListener('playing' , loaderHide)

function loaderShow() {


if(music.currentTime <= 0) {
   loader.style.visibility = "visible"}
if(mVideoBtn.style.background != "") {
    loader.style.visibility = "hidden" }

    
}
setInterval(loaderShow , 50);

































music.addEventListener("playing" , loaderHide);


var audioCurrentTime  = 0;

























    
   
