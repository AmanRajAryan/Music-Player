function autoPlay() {

musicCurrentTime = music.currentTime;

videoCurrentTime = video.currentTime;

musicDuration = music.duration;

videoDuration = video.duration;

    if (musicCurrentTime >= musicDuration || videoCurrentTime >= videoDuration) {
      ;
  
  
  
   musicIndex = musicIndex+ 1;
  
  if (musicIndex == maxMusicIndex)
   { musicIndex = 0; }
  
  playSong(musicIndex);

  if (mVideoBtn.style.background != '') {
    music.pause();
    video.play();

    if (video.src === 'http://127.0.0.1:8080/Index.html') {
      warning.style.animationName = 'warningShow';
      mVideoBtn.style.background = '';
      mAudioBtn.style.background = 'grey';
      video.style.animationName = 'videoClose';
      video.pause();
      music.play();
      video.style.visibility = 'hidden';
    }
  }
  
  }
  
      
      
}


    

setInterval(autoPlay , 1000);
