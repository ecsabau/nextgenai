document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('chat-btn').addEventListener('click', function() {
        document.getElementById('chatbox').style.display = 'flex';
    });

    document.getElementById('chat-header').addEventListener('click', function() {
        document.getElementById('chatbox').style.display = 'none';
    });

    document.getElementById('send-btn').addEventListener('click', async function() {
        const userInput = document.getElementById('user-input').value.trim();
        if (!userInput) return;

        const messageContainer = document.getElementById('messages');
        messageContainer.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

        document.getElementById('user-input').value = '';

        try {
            const response = await fetch("http://13.40.3.102:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage })
            });

            const data = await response.json();
            messageContainer.innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
            messageContainer.scrollTop = messageContainer.scrollHeight;
        } catch (error) {
            messageContainer.innerHTML += `<p><strong>Error:</strong> Unable to reach chatbot</p>`;
        }
    });
});
