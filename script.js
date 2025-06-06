document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sendButton').addEventListener('click', async () => {
        const subject = document.getElementById('subject').value;
        const body = document.getElementById('body').value;

        const spinner = document.querySelector('.spinner');
        const responseDiv = document.getElementById('response');

        // Show spinner and clear response
        spinner.style.display = 'block';
        responseDiv.textContent = '';

        setTimeout(async () => {
            try {
                const response = await fetch('https://agent1-gk.azurewebsites.net/api/http_trigger?code=hhjxgoIVTDI01oPpcb5UHFcWPacC9FQiqugsCh8GtMj8AzFu1ystwQ==', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                    body: `${subject}\n${body}`,
                });

                const result = await response.text();
                const formattedResult = result.replace(/\,/g, ',<br>').replace(/\./g, '.<br>');

                // Hide spinner and show response
                spinner.style.display = 'none';
                responseDiv.innerHTML = formattedResult;
            } catch (error) {
                // Hide spinner and show error
                spinner.style.display = 'none';
                responseDiv.textContent = 'Failed to send email. Please try again.';
                console.error('Error sending email:', error); // Log the error to the console
            }
        }, 10000);
    });
});