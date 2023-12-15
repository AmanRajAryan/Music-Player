function preMusic() {
  music.currentTime = 0;
  video.currentTime = 0;
  
  

musicIndex = musicIndex - 1;
  
  if (musicIndex < 0) 
  {musicIndex = maxMusicIndex -1;}
  playSong(musicIndex);}


preMusicBtn.addEventListener('click', preMusic);
