var bgs = [
  'Images/Bg1.mp4',
  'Images/Bg2.mp4',
  'Images/Bg3.mp4',
  'Images/Bg4.mp4', 
  'Images/Bg5.mp4', 
  'Images/Bg6.mp4', 
  'Images/Bg7.mp4',
   'Images/Bg8.mp4',
   'Images/Bg9.mp4',
   'Images/Bg10.mp4',
   'Images/Bg11.mp4',
   'Images/Bg12.mp4',
  
];

var newBg = bgs[Math.floor(Math.random() * bgs.length)];

bg.src = newBg;
console.log(newBg)


function bgPlayPause() {
    if(music.paused && video.paused) { bg.pause(); }
    
    if (music.currentTime == 0)
     {bg.pause();}}
     
setInterval(bgPlayPause , 50);


music.addEventListener('play' , ()=>{bg.play();});

music.addEventListener('playing' ,()=>{bg.play();} );


video.addEventListener('play' , ()=>{bg.play();});

video.addEventListener('playing' ,()=>{bg.play();} );



