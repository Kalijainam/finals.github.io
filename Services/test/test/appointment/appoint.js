const chatbotMessages = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
  const userMessage = userInput.value;
  displayMessage(userMessage, 'user');
  handleUserMessage(userMessage);
  userInput.value = '';
}

function displayMessage(message, sender) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('chatbot-message');
  messageContainer.classList.add(sender + '-message');
  messageContainer.textContent = message;
  chatbotMessages.appendChild(messageContainer);
}

function handleUserMessage(message) {
  if (message.toLowerCase().includes('appointment')) {
    const chatbotResponse = 'Sure! Please select a doctor and a date for your appointment.';
    const doctors = ['Dr. Mayank', 'Dr. Yash', 'Dr. Jainam',];
    const dates = ['May 22nd', 'May 23rd', 'May 24th'];

    displayMessage(chatbotResponse, 'chatbot');
    displayOptions(doctors, 'Select a doctor:');
    displayOptions(dates, 'Select a date:');
  } else {
    const chatbotResponse = 'I\'m sorry, I can only help you with booking appointments. Please ask for an appointment if you need assistance.';
    displayMessage(chatbotResponse, 'chatbot');
  }
}

function displayOptions(options, prompt) {
  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('chatbot-message');
  optionsContainer.classList.add('chatbot-options');

  const promptElement = document.createElement('div');
  promptElement.textContent = prompt;
  optionsContainer.appendChild(promptElement);

  options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.classList.add('btn');
    optionButton.textContent = option;
    optionButton.addEventListener('click', () => handleOptionSelected(option));
    optionsContainer.appendChild(optionButton);
  });

  chatbotMessages.appendChild(optionsContainer);
}

function handleOptionSelected(option) {
  const chatbotResponse = `You have selected ${option}. Your appointment has been booked successfully!`;
  displayMessage(chatbotResponse, 'chatbot');
}
