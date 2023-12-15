function changeToVideo() {
 video.style.visibility = "visible";
 cover.style.visibility = 'hidden';
  var warning = document.getElementById('warning');
  forwardSkipBtn.style.width = "0";
 backwardSkipBtn.style.width = "0";
video.currentTime = music.currentTime;
mVideoBtn.style.background = "grey";
    mAudioBtn.style.background = "none";
    mVideoBtn.style.animationName = "mVideoClick";
    mAudioBtn.style.animationName = '';
    cover.style.animationName = "coverClose";
    video.style.animationName = "openVideo";
    loader.style.visibility = "hidden";
  
    
  
      video.play();
    music.pause();
     if (video.src == 'http://127.0.0.1:8443/Index.html') {
      warning.style.animationName = 'warningShow';
      mVideoBtn.style.background = "'';
      mAudioBtn.style.background = 'grey';
      video.style.animationName = 'videoClose';
      video.pause();
      music.play();
      video.style.visibility = 'hidden';
      cover.style.visibility = "visible";
      cover.style.animationName = "coverOpen"
 
    }
}
mVideoBtn.addEventListener('click' , changeToVideo);



   




function warningHide() {
 warning.style.animationName = "";
    }
    
    setInterval(warningHide , 3000);
    
    
    
    
    
    
    
    
    
    
    
    
    

function changeToAudio() {

cover.style.visibility = "visible";
forwardSkipBtn.style.width = "210px";
backwardSkipBtn.style.width = "210px";

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



video.addEventListener("playing" , loaderHide);


