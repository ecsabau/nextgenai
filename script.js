// API endpoint
const apiEndpoint = "http://13.40.70.140:5000/chat"; // Replace with your API endpoint

// Get reference to the chatbox element
const messagesDiv = document.getElementById("messages");

// Function to handle sending a message
function sendMessage(userInput) {
    if (userInput.trim() === "") {
        return; // Do nothing if input is empty
    }

    // Display user's message in the chat
    const userMessage = document.createElement("div");
    userMessage.textContent = `You: ${userInput}`;
    userMessage.classList.add("user-message");
    messagesDiv.appendChild(userMessage);

    // Send user's message to the API
    fetch(apiEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
    })
        .then((response) => response.json())
        .then((data) => {
            // Display chatbot's response
            const botMessage = document.createElement("div");
            botMessage.textContent = `Chatbot: ${data.response}`;
            botMessage.classList.add("bot-message");
            messagesDiv.appendChild(botMessage);
        })
        .catch((error) => {
            console.error("Error:", error);
            const errorMessage = document.createElement("div");
            errorMessage.textContent = "Error: Unable to connect to the chatbot.";
            errorMessage.classList.add("error-message");
            messagesDiv.appendChild(errorMessage);
        });
}

// Event listener for the send button
document.getElementById("sendButton").addEventListener("click", () => {
    const userInput = document.getElementById("userInput").value;
    sendMessage(userInput);
    document.getElementById("userInput").value = ""; // Clear input field
});

// Optional: Handle pressing "Enter" to send the message
document.getElementById("userInput").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const userInput = document.getElementById("userInput").value;
        sendMessage(userInput);
        document.getElementById("userInput").value = ""; // Clear input field
    }
});
