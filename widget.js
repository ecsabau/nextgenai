document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chat-button");
    const chatWidget = document.getElementById("chat-widget");
    const closeChat = document.getElementById("close-chat");
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");
    const chatMessages = document.getElementById("chat-messages");

    // Toggle Chatbot Visibility
    chatButton.addEventListener("click", function () {
        chatWidget.style.display = "block";
    });

    closeChat.addEventListener("click", function () {
        chatWidget.style.display = "none";
    });

    // Send Message to API
    sendButton.addEventListener("click", function () {
        const message = userInput.value.trim();
        if (message === "") return;

        // Display user message
        const userMessage = document.createElement("div");
        userMessage.classList.add("message", "user-message");
        userMessage.textContent = "You: " + message;
        chatMessages.appendChild(userMessage);

        // Send request to API
        fetch("http://13.40.70.140:5000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: message }),
        })
        .then(response => response.json())
        .then(data => {
            // Display bot response
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot-message");
            botMessage.textContent = "Bot: " + data.response;
            chatMessages.appendChild(botMessage);
        })
        .catch(error => {
            console.error("Error:", error);
        });

        userInput.value = "";
    });
});
