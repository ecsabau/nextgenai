document.addEventListener("DOMContentLoaded", function () {
    const messagesDiv = document.getElementById("messages");
    const userInputField = document.getElementById("userInput");
    const sendButton = document.getElementById("sendMessage");

    sendButton.addEventListener("click", function () {
        sendMessage();
    });

    userInputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const userInput = userInputField.value.trim();
        if (!userInput) return;

        // Display user's message
        const userMessage = document.createElement("div");
        userMessage.textContent = `You: ${userInput}`;
        messagesDiv.appendChild(userMessage);

        // Send message to Flask API
        fetch("http://13.40.70.140:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: userInput })
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

        // Clear input field
        userInputField.value = "";
    }
});
