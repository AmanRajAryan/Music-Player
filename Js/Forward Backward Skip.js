const forwardSkipBtn = document.getElementById('forwardSkipBtn');

const backwardSkipBtn = document.getElementById('backwardSkipBtn');


const backwardSkipAni = document.getElementById('backwardSkipAni');


const forwardSkipAni = document.getElementById('forwardSkipAni');
function forwardSkip() {
music.currentTime = music.currentTime + 5;
if(music.currentTime > music.duration) {
    music.currentTime = music.currentTime - 1;
}
 
 forwardSkipAni.style.visibility = "visible";
 
 function fSkipHide() {
  forwardSkipAni.style.visibility = "hidden";}
 
 setTimeout(fSkipHide , 600);
       
}

forwardSkipBtn.addEventListener('dblclick' , forwardSkip);








function backwardSkip() {
music.currentTime = music.currentTime - 5;
backwardSkipAni.style.visibility = "visible";

if (music.currentTime < 0) {

    music.currentTime = 0;
    backwardSkipAni.style.visibility = "hidden"
}
    
    
     function bSkipHide() {
      backwardSkipAni.style.visibility = "hidden";
 }
 
 
    
    setTimeout(bSkipHide , 600);
    
    }

backwardSkipBtn.addEventListener('dblclick' , backwardSkip);




