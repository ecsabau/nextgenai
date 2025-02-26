const userInputField = document.getElementById("userInput");
const sendButton = document.getElementById("sendMessage");
const messagesDiv = document.getElementById("messages");

function sendMessage() {
    const userInput = document.getElementById("userInput");  // Make sure this element exists
    const messagesDiv = document.getElementById("messagesDiv"); // Ensure chat container exists

    // Send message to Flask API
    fetch("https://nextgenaisolutions.co.uk/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userInput.value }) // Corrected this line
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const aiResponse = document.createElement("div");
        aiResponse.textContent = `Bot: ${data.response}`;
        messagesDiv.appendChild(aiResponse);

        userInput.value = ""; // Clear input field after sending
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
sendButton.addEventListener("click", sendMessage);
