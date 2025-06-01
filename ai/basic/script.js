document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('promptInput');
    const submitBtn = document.getElementById('submitBtn');
    const aiResponseOutput = document.getElementById('aiResponse');
    const loadingIndicator = document.getElementById('loadingIndicator');

    // IMPORTANT: Replace this with YOUR Cloudflare Worker URL after you deploy it!
    // It will look something like: https://your-worker-name.your-username.workers.dev
    const WORKER_URL = 'https://ai-proxy.hydrovolter.workers.dev'; // <<<<<<< CHANGE THIS

    submitBtn.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();
        if (!prompt) {
            aiResponseOutput.textContent = 'Please enter a prompt.';
            return;
        }

        if (WORKER_URL === 'YOUR_CLOUDFLARE_WORKER_URL_HERE') {
            aiResponseOutput.textContent = 'ERROR: Please set your Cloudflare Worker URL in script.js';
            alert('Please set your Cloudflare Worker URL in script.js');
            return;
        }

        aiResponseOutput.textContent = '';
        loadingIndicator.style.display = 'block';
        submitBtn.disabled = true;

        try {
            const response = await fetch(WORKER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: prompt }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Failed to parse error response' }));
                throw new Error(`Worker Error: ${response.status} ${response.statusText} - ${errorData.error || 'Unknown error'}`);
            }

            const data = await response.json();
            if (data.error) {
                aiResponseOutput.textContent = `Error: ${data.error}`;
            } else {
                aiResponseOutput.textContent = data.response;
            }

        } catch (error) {
            console.error('Error calling worker:', error);
            aiResponseOutput.textContent = `An error occurred: ${error.message}`;
        } finally {
            loadingIndicator.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
});