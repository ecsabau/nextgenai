<script>
    const apiEndpoint = "http://13.40.70.140:5000/chat"; // Replace with your API's endpoint

    document.getElementById('send-button').addEventListener('click', () => {
        const userInput = document.getElementById('user-input').value;

        if (userInput.trim() === '') return;

        // Append user message to the chat
        const messagesDiv = document.getElementById('messages');
        const userMessage = document.createElement('div');
        userMessage.textContent = "You: " + userInput;
        messagesDiv.appendChild(userMessage);

        // Send message to API
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        })
        .then(response => response.json())
        .then(data => {
            // Append chatbot response
            const botMessage = document.createElement('div');
            botMessage.textContent = "Bot: " + data.response;
            messagesDiv.appendChild(botMessage);
        })
        .catch(error => {
            console.error('Error:', error);
            const errorMessage = document.createElement('div');
            errorMessage.textContent = "Bot: Sorry, there was an error!";
            messagesDiv.appendChild(errorMessage);
        });

        document.getElementById('user-input').value = ''; // Clear input
    });
</script>
