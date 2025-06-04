document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sendButton').addEventListener('click', async () => {
        const subject = document.getElementById('subject').value;
        const body = document.getElementById('body').value;

        const spinner = document.querySelector('.spinner');
        const responseDiv = document.getElementById('response');

        // Show spinner and clear response
        spinner.style.display = 'block';
        responseDiv.textContent = '';

        try {
            const response = await fetch('https://ticket-agent.happycliff-de0ac07f.uksouth.azurecontainerapps.io/api/HttpExample?', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ subject, body }),
            });

            const result = await response.json();

            // Hide spinner and show response
            spinner.style.display = 'none';
            responseDiv.textContent = result.message || 'Email sent successfully!';
        } catch (error) {
            // Hide spinner and show error
            spinner.style.display = 'none';
            responseDiv.textContent = 'Failed to send email. Please try again.';
        }
    });
});