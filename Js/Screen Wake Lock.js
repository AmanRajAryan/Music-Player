// Check if the Wake Lock API is available
if ('wakeLock' in navigator) {
  // Request a wake lock
  navigator.wakeLock.request('screen')
    .then((wakeLock) => {


//console.log('Screen wake lock engaged');

      // Add an event listener to release the wake lock
      wakeLock.addEventListener('release', () => {
       // console.log('Screen wake lock released');
      });
    })
    .catch((error) => {
      console.error('Could not request wake lock:', error);
    });
}
