var musicIndex = 0;

var maxMusicIndex = 7;


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
const length = document.getElementById('length');
const length1 = document.getElementById('length1')

const length2 = document.getElementById('length2');

const length3 = document.getElementById('length3');

const length4 = document.getElementById('length4');

const length5 = document.getElementById('length5');

const length6 = document.getElementById('length6');

const length7 = document.getElementById('length7');



const fearless = document.getElementById('song4');

const roses = document.getElementById('song6');

const cradles = document.getElementById('song5');

const childhood = document.getElementById('song7');


const wahran = document.getElementById('song1');



const whoopty = document.getElementById('song2');

const livingLife = document.getElementById('song3');

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

setInterval(playBtnState , 100);
















function progressBarUpdate() {
   var musicPer = music.currentTime/music.duration;
   musicPer = musicPer*100;
  
   
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



var music1DurMinute = wahran.duration / 60;
   
   music1DurMinute = "0" + musicDurMinute.toString().substr(0 , 2).replace('.' , '');
   
   var music1DurSec = wahran.duration % 60;
   
   
  music1DurSec = music1DurSec.toString().substr(0 , 2).replace('.' , '');
   
   
   
   length1.innerHTML = music1DurMinute + ":" + music1DurSec;
   


var music2DurMinute = whoopty.duration / 60;
   
   music2DurMinute = "0" + musicDurMinute.toString().substr(0 , 2).replace('.' , '');
   
   var music2DurSec = whoopty.duration % 60;
   
   
  music2DurSec = music2DurSec.toString().substr(0 , 2).replace('.' , '');
   
   
   
   length2.innerHTML = music2DurMinute + ":" + music2DurSec;










var music3DurMinute = livingLife.duration / 60;
   
   music3DurMinute = "0" + musicDurMinute.toString().substr(0 , 2).replace('.' , '');
   
   var music3DurSec = livingLife.duration % 60;
   
   
  music3DurSec = music3DurSec.toString().substr(0 , 2).replace('.' , '');
   
   
   
   length3.innerHTML = music3DurMinute + ":" + music3DurSec;
   
   
   
   
   
   var music4DurMinute = fearless.duration / 60;
   
   music4DurMinute = "0" + music4DurMinute.toString().substr(0 , 2).replace('.' , '');
   
   var music4DurSec = fearless.duration % 60;
   
   
  music4DurSec = music4DurSec.toString().substr(0 , 2).replace('.' , '');
   
   
   
   length4.innerHTML = music4DurMinute + ":" + music4DurSec;
   
   
   var music5DurMinute = cradles.duration / 60;
   
   music5DurMinute = "0" + music5DurMinute.toString().substr(0 , 2).replace('.' , '');
   
   var music5DurSec = cradles.duration % 60;
   
   
  music5DurSec = music5DurSec.toString().substr(0 , 2).replace('.' , '');
   
   
   
   length5.innerHTML = music5DurMinute + ":" + music5DurSec;
   
   
   var music6DurMinute = roses.duration / 60;
   
   music6DurMinute = "0" + music6DurMinute.toString().substr(0 , 2).replace('.' , '');
   
   var music6DurSec = roses.duration % 60;
   
   
  music6DurSec = music6DurSec.toString().substr(0 , 2).replace('.' , '');
   
   
   
   length6.innerHTML = music6DurMinute + ":" + music6DurSec;
   
   
   
   var music7DurMinute = childhood.duration / 60;
   
   music7DurMinute = "0" + music7DurMinute.toString().substr(0 , 2).replace('.' , '');
   
   var music7DurSec = childhood.duration % 60;
   
   
  music7DurSec = music7DurSec.toString().substr(0 , 2).replace('.' , '');
   
   
   
   length7.innerHTML = music7DurMinute + ":" + music7DurSec;
   
   
   
   
   
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
   
   
   
   
   playedDur.innerHTML =  musicPlayedMinute + ':' + musicPlayedSec
       
       
       
       
   }
   
   
   
   


}












setInterval(progressBarUpdate , 1000);




function musicTimeUpdate() {
var progressBarValuePer = progressBar.value /100;

    music.currentTime = music.duration * progressBarValuePer;
   
    video.currentTime = video.duration * progressBarValuePer;
    
    
}



progressBar.addEventListener('touchend' , musicTimeUpdate);









const player = document.getElementById('player');

const wahranThumb = document.getElementById('thumbSong1');

const whooptyThumb = document.getElementById('thumbSong2');

const livingThumb = document.getElementById('thumbSong3');

const fearlessThumb =document.getElementById('thumbSong4');

const cradlesThumb =document.getElementById('thumbSong5');


const rosesThumb =document.getElementById('thumbSong6');

const childhoodThumb =document.getElementById('thumbSong7');

function fearlessPlay() {
    musicIndex = 4;
    cover.src = "Fearless.jpeg"
    music.src = fearless.src;
    music.play();
    player.style.bottom = '';
    player.style.top = '0px'
    video.src = "";
    if (mVideoBtn.style.background != "") {music.pause();
 video.play();}
    
}
fearlessThumb.addEventListener('click' , fearlessPlay)



function cradlesPlay() {
    musicIndex = 5;
    cover.src = "Cradles.jpg"
    music.src = cradles.src;
    music.play();
    player.style.bottom = '';
    player.style.top = '0px'
    video.src = "";
    if (mVideoBtn.style.background != "") {music.pause();
 video.play();}
    
}
cradlesThumb.addEventListener('click' , cradlesPlay)



function rosesPlay() {
    musicIndex = 6;
    cover.src = "Roses.jpeg"
    music.src = roses.src;
    music.play();
    player.style.bottom = '';
    player.style.top = '0px'
    video.src = "Roses.mp4";
    if (mVideoBtn.style.background != "") {music.pause();
 video.play();}
    
}
rosesThumb.addEventListener('click' , rosesPlay)



function childhoodPlay() {
    musicIndex = 7;
    cover.src = "Childhood.jpeg"
    music.src = childhood.src;
    music.play();
    player.style.bottom = '';
    player.style.top = '0px'
    video.src = "";
    if (mVideoBtn.style.background != "") {music.pause();
 video.play();}
    
}
childhoodThumb.addEventListener('click' , childhoodPlay)






function wahranPlay() {
    musicIndex = 1;
    cover.src = "Wahran.jpg"
    music.src = wahran.src;
    music.play();
    player.style.bottom = '';
    player.style.top = '0px'
    video.src = "";
    if (mVideoBtn.style.background != "") {music.pause();
 video.play();}
    
}
wahranThumb.addEventListener('click' , wahranPlay)

function whooptyPlay() {
musicIndex = 2;
cover.src = "Whoopty.jpg"
    music.src = whoopty.src;
    music.play();
    player.style.bottom = '';
    player.style.top = '0px'
    video.src = "";
    if (mVideoBtn.style.background != "") {music.pause();
 video.play();}
    }
    
    
  function livingPlay() {
musicIndex = 3;
cover.src = "Living Life.jpeg"
    music.src = livingLife.src;
    music.play();
    player.style.bottom = '';
    player.style.top = '0px';
    video.src = "Living Life.mp4";
    if (mVideoBtn.style.background != "") {
    music.pause();
 video.play();}
    }  
    
    whooptyThumb.addEventListener('click' , whooptyPlay);
    
    
   livingThumb.addEventListener('click' , livingPlay)



function preMusic() {
    musicIndex = musicIndex - 1;
    
    if (musicIndex == 0) {
        musicIndex = maxMusicIndex;
    }
    
    if(musicIndex == 1) {
        //Play Wahran
        musicIndex = 1;
    cover.src = "Wahran.jpg"
    music.src = wahran.src;
    music.play();
    video.src = "";    
    }
    
    if (musicIndex == 2) {
        //Play Whoopty
        musicIndex = 2;
cover.src = "Whoopty.jpg"
    music.src = whoopty.src;
    music.play();
    video.src = "";    
        
    }
    
    if(musicIndex == 3) {
        //Play Living Life In The Night
        musicIndex = 3;
cover.src = "Living Life.jpeg"
    music.src = livingLife.src;
    music.play();
    video.src = "Living Life.mp4";
        }
        
        
        if(musicIndex == 4) {
        
        musicIndex = 4;
cover.src = "Fearless.jpeg"
    music.src = fearless.src;
    music.play();
    video.src = "";
        }
        
        if(musicIndex == 5) {
        
        musicIndex = 5;
cover.src = "Cradles.jpg"
    music.src = cradles.src;
    music.play();
    video.src = "";
        }
        
     if(musicIndex == 6) {
        
        musicIndex = 6;
cover.src = "Roses.jpeg"
    music.src = roses.src;
    music.play();
    video.src = "Roses.mp4";
        }  
        
      if(musicIndex == 7) {
        
        musicIndex = 7;
cover.src = "Childhood.jpeg"
    music.src = childhood.src;
    music.play();
    video.src = "";
        }    
        
        
}

preMusicBtn.addEventListener('click' , preMusic)











function nextMusic() {
    musicIndex = musicIndex + 1;
    
    if (musicIndex > maxMusicIndex) {
        musicIndex = 1;
    }
    
    if(musicIndex == 1) {
        //Play Wahran
        musicIndex = 1;
    cover.src = "Wahran.jpg"
    music.src = wahran.src;
    music.play();
    video.src = "";
    }
    
    if (musicIndex == 2) {
        //Play Whoopty
        musicIndex = 2;
cover.src = "Whoopty.jpg"
    music.src = whoopty.src;
    music.play();
    video.src = "";    
        
    }
    
    if(musicIndex == 3) {
        //Play Living Life In The Night
        musicIndex = 3;
cover.src = "Living Life.jpeg"
    music.src = livingLife.src;
    music.play();
    video.src = "Living Life.mp4";
        }
        if(musicIndex == 4) {
        
        musicIndex = 4;
cover.src = "Fearless.jpeg"
    music.src = fearless.src;
    music.play();
    video.src = "";
        }
        
        if(musicIndex == 5) {
        
        musicIndex = 5;
cover.src = "Cradles.jpg"
    music.src = cradles.src;
    music.play();
    video.src = "";
        }
        
     if(musicIndex == 6) {
        
        musicIndex = 6;
cover.src = "Roses.jpeg"
    music.src = roses.src;
    music.play();
    video.src = "Roses.mp4";
        }  
        
      if(musicIndex == 7) {
        
        musicIndex = 7;
cover.src = "Childhood.jpeg"
    music.src = childhood.src;
    music.play();
    video.src = "";
        }    
        
        
}

nextMusicBtn.addEventListener('click' , nextMusic)






var backBtn = document.getElementById('back');

var loader = document.getElementById('loader');


function playerDown() {


if(mVideoBtn.style.background != "") {
    

video.style.width = "80px"

video.style.top = "7px"
video.style.padding = "10px 0px"
video.style.left = "5px"

}

avChanger.style.visibility = "hidden";
loader.style.width = "40px"
loader.style.height = "40px"
loader.style.top = "15px"
loader.style.border ="6px solid rgba(0, 0, 0, 0.1)"
loader.style.borderLeftColor = "#3498db"
loader.style.left = "25px"

    player.style.animationName = "playerDown";
    
    var length = document.getElementById('length');
    length.style.visibility = "visible";
    
    
   // length.style.animationName = "lengthDown";
    
    cover.style.animationName = 'coverDown'
    
    playBtn.style.animationName = "playBtnDown";
    
    backBtn.style.animationName = "backDown";
    
    pauseBtn.style.animationName = "pauseBtnDown"
    
    preMusicBtn.style.animationName = "preSongDown";
    
    nextMusicBtn.style.animationName =
    "nextSongDown" ;
    
    progressBar.style.animationName = "progressBarDown";
    
    
    playedDur.style.animationName = "playedDurDown";
    
    
    
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


  avChanger.style.visibility = "visible";
 
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
  
}




player.addEventListener('touchmove' , playerUp);






function nextPlay() {

musicCurrentTime = music.currentTime;

videoCurrentTime = video.currentTime;

musicDuration = music.duration;

videoDuration = video.duration;

    if (musicCurrentTime >= musicDuration || musicCurrentTime >= videoDuration) {
      musicIndex = musicIndex + 1;
      
      
       if (musicIndex > maxMusicIndex) {
        musicIndex = 1;
        
    }
    
    if(musicIndex == 1) {
        //Play Wahran
        musicIndex = 1;
    cover.src = "Wahran.jpg"
    music.src = wahran.src;
    music.play();
        
    }
    
    if (musicIndex == 2) {
        //Play Whoopty
        musicIndex = 2;
cover.src = "Whoopty.jpg"
    music.src = whoopty.src;
    music.play();
        
        
    }
    
    if(musicIndex == 3) {
        //Play Living Life In The Night
        musicIndex = 3;
cover.src = "Living Life.jpeg"
    music.src = livingLife.src;
    music.play();
        }
    if(musicIndex == 4) {
        
        musicIndex = 4;
cover.src = "Fearless.jpeg"
    music.src = fearless.src;
    music.play();
        }
        
        if(musicIndex == 5) {
        
        musicIndex = 5;
cover.src = "Cradles.jpg"
    music.src = cradles.src;
    music.play();
        }
        
     if(musicIndex == 6) {
        
        musicIndex = 6;
cover.src = "Roses.jpeg"
    music.src = roses.src;
    music.play();
        }  
        
      if(musicIndex == 7) {
        
        musicIndex = 7;
cover.src = "Childhood.jpeg"
    music.src = childhood.src;
    music.play();
        }    
        
        
    }
    
   
}


    

setInterval(nextPlay , 2000);
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




function changeToVideo() {
console.log(video.src);
var warning = document.getElementById('warning');

if(video.src == "http://127.0.0.1:8080/Index.html") {


  


    warning.style.animationName = "warningShow"
    
   
    
    
    
}


if (video.src != "http://127.0.0.1:8080/Index.html") {
    


video.currentTime = music.currentTime;


  mVideoBtn.style.background = "grey"
   
   mAudioBtn.style.background = "none"
   
   mVideoBtn.style.animationName = "mVideoClick";
   
   mAudioBtn.style.animationName = '';
   
   
   
   video.style.animationName = "openVideo"
   cover.style.animationName = "coverClose"
   loader.style.visibility = "hidden"
   video.play();
   music.pause();
   }
}


function warningHide() {
        warning.style.animationName  = "";
    }
    
    setInterval(warningHide , 3000);

function changeToAudio() {



music.currentTime = video.currentTime;


    mVideoBtn.style.background = ""
   
   mAudioBtn.style.background = "grey"
 
 mAudioBtn.style.animationName = "mAudioClick"
 
 mVideoBtn.style.animationName = ""
 
   video.style.animationName = "videoClose"
   cover.style.animationName = "coverOpen"
   video.pause();
   music.play();
   
}

mAudioBtn.addEventListener('click' , changeToAudio);

mVideoBtn.addEventListener('click' , changeToVideo);


video.addEventListener("playing" , loaderHide);



function fullScreen() {
if (document.fullscreenElement !== null) {
  // Page is in fullscreen mode
  
} else {

  //document.body.removeEventListener('click' , fullScreen);
 document.body.requestFullscreen();
}

    
   
}

document.body.addEventListener('click' , fullScreen);













var videoElement = document.getElementById('video');
    var isFullscreen = false;

    
    videoElement.addEventListener('webkitfullscreenchange', function(event) {
    var videoWidth = video.style.width;
      if (document.fullscreenElement) {
        // Entered fullscreen (for older versions of Safari)
        isFullscreen = true;
    video.style.padding = "0 0 0 0"

    videoWidth = "600px"
    
    console.log(videoWidth);
    console.log(video.style.padding);
      } else {
        // Exited fullscreen (for older versions of Safari)
        isFullscreen = false;
        video.style.padding = "45px 0px";
        videoWidth = "200px"
        console.log(videoWidth);
        console.log(video.style.padding);
      }
    });
    