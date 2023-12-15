var musicIndex = 0;



//{name: '' , duration: ''}, 

   
      const songs = [
      
      
      
      
      
      
      
      
      
      {name: 'In My Mind' , duration: '02:59'},
      
      {name: 'New Americana' , duration: '02:42'},
     
      
      {name: 'Run Till Dark' , duration: '02:42'},
      
      
      
      
 { name: 'Look At Me Now', duration: '02:42' },
 { name: 'Killer From Northside', duration: '03:07' },
 { name: 'Mood', duration: '03:17' },
{name:'Cant Get You Out Of My Head',duration:'02:53'},
  { name: 'Nobody Knows', duration: '02:30' },
   {name: 'Balenciaga' , duration: '02:48'},
  { name: 'Rave', duration: '02:49' },
  { name: 'Ainsi Bas Da Lidas', duration: '02:30' },
  { name: 'Tourner Dans Le Vide', duration: '04:10' },
{name: 'Metamorphosis', duration: '02:22' },
  { name: 'Call Me By Your Name', duration: '03:09' },
{name: 'Neon Blade', duration: '' },
{ name: 'Childhood', duration: '02:04' },
 { name: 'Roses', duration: '03:14' },
 { name: 'Cradles', duration: '03:48' },
 { name: 'Fearless', duration: '03:14' },
{name: 'Living Life In The Night',duration: '02:13' },
  { name: 'Whoopty', duration: '03:25' },
  { name: 'Wahran', duration: '03:56' },
      ];
      
      
      
      var maxMusicIndex = songs.length; //Number of songs
      

      function renderSongs() {
        const songList = document.getElementById('songList');

        // Clear existing songs
        songList.innerHTML = '';

        // Render each song in the array
        songs.forEach(song => {
          const songDiv = document.createElement('div');
          songDiv.className = 'song';

          const img = document.createElement('img');
          img.src = 'Covers/' + song.name + '.jpeg';
          img.alt = song.name + ' Cover';

          const songDetails = document.createElement('div');
          songDetails.innerHTML = `${song.name}<br><span>${song.duration}</span>`;

          songDiv.appendChild(img);
          songDiv.appendChild(songDetails);

          songList.appendChild(songDiv);
        });
      }

      renderSongs();
    
