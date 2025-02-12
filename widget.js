// Toggle chatbot visibility
function toggleChatbot() {
    let chatbot = document.getElementById("chatbot-container");
    chatbot.style.display = (chatbot.style.display === "none" || chatbot.style.display === "") ? "block" : "none";
}

// Handle sending messages
document.getElementById("sendBtn").addEventListener("click", function() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    let chatMessages = document.getElementById("chatbot-messages");

    // Display user message
    let userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.innerText = userInput;
    chatMessages.appendChild(userMessage);

    // Clear input field
    document.getElementById("userInput").value = "";

    // Call Flask backend
    fetch("https://nextgenaisolutions.co.uk/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: "Hi" })
    })
    .then(response => response.json())
    .then(data => {
        // Display bot response
        let botMessage = document.createElement("p");
        botMessage.classList.add("bot-message");
        botMessage.innerText = data.response;
        chatMessages.appendChild(botMessage);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
