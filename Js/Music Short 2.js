function checkFileExists(fileUrl, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', fileUrl, true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 206 || xhr.status === 304 || xhr.status === 200) {
        callback(true); // File exists
      } else {
        callback(false); // File does not exist
      }
    }
  };

  xhr.send();
}










function playSong(index) {
  const song = songs[index];
  
  musicIndex = index;
  cover.alt = song.name + 'cover';
  cover.src = "Covers/" + song.name + ".jpeg";
  favicon.href = cover.src;
  music.src = "Songs/" + song.name + ".mp3";
  
  setTimeout(() => {
    music.play();
  }, 400);

  player.style.bottom = '0px';
  video.src = "Videos/" + song.name + ".mp4";












  var fileUrl = video.src;
  console.log(video.src);
  console.log(fileUrl);

  checkFileExists(fileUrl, function(exists) {
    if (exists) {
      console.log('File exists');
      video.src = fileUrl;
      if (mVideoBtn.style.background !== '') {
        music.pause();
        video.play();
      }
    } else {
      console.log('File does not exist');
      video.src = '';

      warning.style.animationName = 'warningShow';
      mVideoBtn.style.background = '';
      mAudioBtn.style.background = 'grey';
      video.style.animationName = 'videoClose';
      video.pause();
      music.play();
      video.style.visibility = 'hidden';
      cover.style.visibility = 'visible';
      cover.style.animationName = 'coverOpen';
      if (player.style.height === '10vh') {
        cover.style.animationName = 'coverDown';
      }
    }
  });

  if (player.style.height === '10vh') {
    cover.style.animationName = 'coverDown';
  }
}

const thumbnails = document.querySelectorAll('.song');
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => playSong(index));
});
