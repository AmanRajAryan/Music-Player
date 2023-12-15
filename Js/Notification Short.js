// Check if the browser supports notifications
if ('Notification' in window) {
  // Request permission to show notifications
  Notification.requestPermission()
    .then(function (permission) {
      if (permission === 'granted') {
        // Create a notification with action buttons
        var notification = new Notification('New Message', {
          body: 'You have a new message',
          actions: [
            { action: 'reply', title: 'Reply' },
            { action: 'archive', title: 'Archive' }
          ]
        });

        // Add event listener for button click
        notification.addEventListener('notificationclick', function (event) {
          if (event.action === 'reply') {
            // Perform reply action
            console.log('Reply clicked');
          } else if (event.action === 'archive') {
            // Perform archive action
            console.log('Archive clicked');
          }

          // Close the notification
          notification.close();
        });
      }
    });
}
