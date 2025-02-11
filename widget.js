document.addEventListener("DOMContentLoaded", function () {
    const chatToggle = document.getElementById("chat-toggle");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");
    const sendMessage = document.getElementById("sendMessage");
    const userInput = document.getElementById("userInput");
    const chatMessages = document.getElementById("chat-messages");

    chatToggle.addEventListener("click", function () {
        chatContainer.classList.toggle("hidden");
    });

    closeChat.addEventListener("click", function () {
        chatContainer.classList.add("hidden");
    });

    sendMessage.addEventListener("click", async function () {
        const message = userInput.value.trim();
        if (!message) return;

        chatMessages.innerHTML += `<p><strong>User:</strong> ${message}</p>`;
        userInput.value = "";

        const response = await fetch("http://13.40.70.140:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: message }),
        });

        const data = await response.json();
        chatMessages.innerHTML += `<p><strong>Chatbot:</strong> ${data.response}</p>`;
    });
});
