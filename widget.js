document.addEventListener("DOMContentLoaded", function () {
    const chatContainer = document.getElementById("chatbotContainer");
    const openChat = document.getElementById("openChat");
    const closeChat = document.getElementById("closeChat");
    const chatMessages = document.getElementById("chatMessages");
    const userInput = document.getElementById("userInput");
    const sendMessage = document.getElementById("sendMessage");

    openChat.addEventListener("click", () => {
        chatContainer.classList.add("chatbot-visible");
    });

    closeChat.addEventListener("click", () => {
        chatContainer.classList.remove("chatbot-visible");
    });

    sendMessage.addEventListener("click", async () => {
        let message = userInput.value.trim();
        if (!message) return;

        appendMessage("User", message);
        userInput.value = "";

        try {
            let response = await fetch("http://13.40.70.140:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: message }),
            });

            let data = await response.json();
            appendMessage("Chatbot", data.response);
        } catch (error) {
            appendMessage("Chatbot", "Error connecting to the server.");
        }
    });

    function appendMessage(sender, message) {
        let msgDiv = document.createElement("div");
        msgDiv.textContent = `${sender}: ${message}`;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
