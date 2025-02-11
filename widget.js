document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chat-button");
    const chatWidget = document.getElementById("chat-widget");
    const chatBox = document.getElementById("chat-box");
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");

    // Toggle chat widget visibility
    chatButton.addEventListener("click", function () {
        chatWidget.classList.toggle("hidden");
    });

    // Function to append messages to the chat window
    function appendMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(sender);
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
    }

    // Send message to the Flask backend
    async function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        appendMessage("User", message);
        userInput.value = ""; // Clear input field

        try {
            const response = await fetch("http://your-server-ip:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: message }),
            });

            const data = await response.json();
            appendMessage("Chatbot", data.response);
        } catch (error) {
            appendMessage("Chatbot", "⚠️ Error: Unable to connect to AI.");
        }
    }

    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });
});
