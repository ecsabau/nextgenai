document.addEventListener("DOMContentLoaded", function () {
    let chatbotButton = document.createElement("div");
    chatbotButton.innerHTML = "💬 Chat with us";
    chatbotButton.style.position = "fixed";
    chatbotButton.style.bottom = "20px";
    chatbotButton.style.right = "20px";
    chatbotButton.style.backgroundColor = "#007bff";
    chatbotButton.style.color = "white";
    chatbotButton.style.padding = "10px 15px";
    chatbotButton.style.borderRadius = "20px";
    chatbotButton.style.cursor = "pointer";
    chatbotButton.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
    chatbotButton.style.fontSize = "14px";
    chatbotButton.style.fontFamily = "Arial, sans-serif";
    
    let iframe = document.createElement("iframe");
    iframe.src = "https://nextgenaisolutions.co.uk/chatbot.html";
    iframe.style.position = "fixed";
    iframe.style.bottom = "70px";
    iframe.style.right = "20px";
    iframe.style.width = "350px";
    iframe.style.height = "450px";
    iframe.style.border = "none";
    iframe.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
    iframe.style.borderRadius = "10px";
    iframe.style.display = "none";

    chatbotButton.addEventListener("click", function () {
        iframe.style.display = iframe.style.display === "none" ? "block" : "none";
    });

    document.body.appendChild(chatbotButton);
    document.body.appendChild(iframe);
});
