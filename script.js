const userInputField = document.getElementById("userInput");
const sendButton = document.getElementById("sendMessage");
const messagesDiv = document.getElementById("messages");

// Function to send a message
function sendMessage() {
  const userInput = userInputField.value.trim();
  if (!userInput) return;

  // Display user's message
  const userMessage = document.createElement("div");
  userMessage.textContent = `You: ${userInput}`;
  messagesDiv.appendChild(userMessage);

  // Clear input field
  userInputField.value = "";

  // Send message to Flask API
  fetch("http://nextgenaisolutions.co.uk/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: userInput })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const aiResponse = document.createElement("div");
    aiResponse.textContent = `Bot: ${data.response}`;
    messagesDiv.appendChild(aiResponse);
  })
  .catch(error => {
    console.error("Error:", error);
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Bot: Sorry, there was an error connecting to the server.";
    messagesDiv.appendChild(errorMessage);
  });
}

sendButton.addEventListener("click", sendMessage);
