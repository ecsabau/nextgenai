document.addEventListener("DOMContentLoaded", function () {
    const chatbox = document.createElement("div");
    chatbox.id = "chat-widget";
    chatbox.innerHTML = `
        <div id="chat-container">
            <div id="chat-header">Chat with AI</div>
            <div id="chat-messages"></div>
            <input type="text" id="user-input" placeholder="Type your message...">
            <button id="send-button">Send</button>
        </div>
    `;
    document.body.appendChild(chatbox);

    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    sendButton.addEventListener("click", function () {
        const message = userInput.value.trim();
        if (!message) return;

        displayMessage(`You: ${message}`, "user");
        userInput.value = "";

        fetch("http://13.40.70.140:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: message }),
        })
        .then(response => response.json())
        .then(data => displayMessage(`AI: ${data.response}`, "bot"))
        .catch(error => console.error("Error:", error));
    });

    function displayMessage(message, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.className = sender;
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
    }
});
