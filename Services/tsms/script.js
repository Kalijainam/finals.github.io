function sendSMS() {
  var medicineName = document.getElementById('medicineName').value;
  var reminderTime = document.getElementById('reminderTime').value;
  var selectedTime = new Date(reminderTime).getTime();
  var currentTime = Date.now();

  if (selectedTime <= currentTime) {
    alert('Invalid reminder time. Please select a future time.');
    return;
  }

  const timeDifference = selectedTime - currentTime;
  setTimeout(() => {
    sendMessage(medicineName);
  }, timeDifference);

  function sendMessage(medicineName) {
    fetch('https://api.twilio.com/2010-04-01/Accounts/AC55ef14cd0241d915fbef9081a1a7ebb5/Messages.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('AC55ef14cd0241d915fbef9081a1a7ebb5:0e8739d5a40b96f0928b7db07876e2e7'),
      },
      body: new URLSearchParams({
        From: '+12545564586',
        To: '+917828554988',
        Body: `Reminder: It's time to take your ${medicineName}.`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Message has been sent!');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  }
}
