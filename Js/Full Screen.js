function fullScreen() {
if (document.fullscreenElement !== null) {
  // Page is in fullscreen mode
  
} else {

  //document.body.removeEventListener('click' , fullScreen);
 document.body.requestFullscreen();
}

    
   
}

document.body.addEventListener('click' , fullScreen);
