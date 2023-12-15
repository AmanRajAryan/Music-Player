function nextMusic() {
bg.pause();
  music.currentTime = 0;
  video.currentTime = 0;

  musicIndex = musicIndex+ 1;
  
  if (musicIndex == maxMusicIndex) 
  { musicIndex = 0; }
  
  playSong(musicIndex);

  
}

nextMusicBtn.addEventListener('click', nextMusic);
