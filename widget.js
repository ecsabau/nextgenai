document.addEventListener("DOMContentLoaded", function() {
    const chatToggle = document.getElementById("chatbot-toggle");
    const chatContainer = document.getElementById("chatbot-container");

    chatToggle.addEventListener("click", function() {
        if (chatContainer.classList.contains("show-chat")) {
            chatContainer.classList.remove("show-chat");
            chatContainer.style.display = "none"; 
        } else {
            chatContainer.classList.add("show-chat");
            chatContainer.style.display = "block"; 
        }
    });
});
