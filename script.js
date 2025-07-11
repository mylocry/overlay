document.addEventListener('DOMContentLoaded', function() {
    // --- Waiting Screen Countdown ---
    const countdownElement = document.getElementById('countdown');
    let timeInSeconds = 600; // 10 minutes

    const countdownInterval = setInterval(() => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timeInSeconds--;

        if (timeInSeconds < 0) {
            clearInterval(countdownInterval);
            document.getElementById('waiting-screen').style.display = 'none';
            document.getElementById('ingame-screen').style.display = 'block';
        }
    }, 1000);

    // --- In-Game Event Listener (Example) ---
    // In a real scenario, you would integrate this with your streaming platform's event service (e.g., StreamElements)
    const latestEventElement = document.getElementById('latest-event');

    function updateLatestEvent(text) {
        latestEventElement.textContent = text;
        latestEventElement.style.animation = 'none';
        void latestEventElement.offsetWidth; // Trigger reflow
        latestEventElement.style.animation = 'slideIn 0.5s forwards';
    }

    // Example of how to update the event
    setTimeout(() => {
        updateLatestEvent('New Follower: StreamFan123');
    }, 15000); // After 15 seconds

    setTimeout(() => {
        updateLatestEvent('New Subscriber: SuperSupporter');
    }, 30000); // After 30 seconds


    // --- Chat Box (Example) ---
    const chatMessagesElement = document.getElementById('chat-messages');

    function addChatMessage(user, message) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${user}:</strong> ${message}`;
        chatMessagesElement.prepend(li); // Adds new message at the top

        // Keep a maximum of 20 messages
        if (chatMessagesElement.children.length > 20) {
            chatMessagesElement.lastChild.remove();
        }
    }

    // Example of adding chat messages
    setTimeout(() => addChatMessage('viewer1', 'This overlay looks awesome!'), 5000);
    setTimeout(() => addChatMessage('viewer2', 'Hype for the Marvel Rivals stream!'), 8000);
    setTimeout(() => addChatMessage('viewer3', 'Let\'s go!'), 12000);

});
