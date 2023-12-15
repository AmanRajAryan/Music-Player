
  

function handleVisibilityChange() {
  if (document.visibilityState === "hidden") {
  
  
  
  if(mVideoBtn.style.background != "" && !video.paused) {
      
  
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
   
   
   
   const playerHeight = player.style.height;
   console.log(playerHeight);
   
   
   
   if(player.style.height == "10vh") {
   
       cover.style.animationName = 'coverDown';
      
       cover.style.visibility = 'visible';
       video.style.visibility = 'hidden';}
   
    }
  }
  
  if(document.visibilityState == "visible") {
      document.body.requestFullscreen();
      
  }
  
}




document.addEventListener("visibilitychange", handleVisibilityChange);

