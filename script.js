console.log("Script.js loaded!");
document.addEventListener("DOMContentLoaded", function () {
    const messagesDiv = document.getElementById("messages");
    const userInputField = document.getElementById("userInput");
    const sendButton = document.getElementById("sendMessage");

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
        fetch("https://nextgenaisolutions.co.uk/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: userInput }),
        })
        .then(response => response.json())
        .then(data => {
            // Display chatbot's response
            const botMessage = document.createElement("div");
            botMessage.textContent = `Bot: ${data.response}`;
            messagesDiv.appendChild(botMessage);
        })
        .catch(error => {
            console.error("Error:", error);
            const errorMessage = document.createElement("div");
            errorMessage.textContent = "Error: Unable to connect to chatbot.";
            messagesDiv.appendChild(errorMessage);
        });
    }

    // Send message when clicking send button
    sendButton.addEventListener("click", sendMessage);

    // Send message when pressing Enter key
    userInputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
