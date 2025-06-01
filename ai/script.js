document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('promptInput');
    const submitBtn = document.getElementById('submitBtn');
    const aiResponseOutput = document.getElementById('aiResponse');
    const loadingIndicator = document.getElementById('loadingIndicator');
    const modelSelector = document.getElementById('modelSelector'); // Get the dropdown

    // IMPORTANT: Replace this with YOUR Cloudflare Worker URL
    const WORKER_URL = 'https://ai-proxy.hydrovolter.workers.dev'; // <<<<<<< MAKE SURE THIS IS CORRECT

    submitBtn.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();
        const selectedModel = modelSelector.value; // Get the selected model

        if (!prompt) {
            aiResponseOutput.textContent = 'Please enter a prompt.';
            return;
        }
        
        if (!selectedModel) {
            aiResponseOutput.textContent = 'Please select an AI model.';
            return;
        }

        aiResponseOutput.textContent = '';
        loadingIndicator.style.display = 'block';
        submitBtn.disabled = true;
        promptInput.disabled = true;
        modelSelector.disabled = true;

        try {
            const response = await fetch(WORKER_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Send both prompt and selected model to the worker
                body: JSON.stringify({ 
                    prompt: prompt,
                    model: selectedModel 
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ 
                    error: `Request failed with status ${response.status}. No JSON error body.` 
                }));
                // Prefer error message from server if available
                let errorMessage = errorData.error || `Worker Error: ${response.status} ${response.statusText}`;
                if (errorData.detail) { // If worker provides more detail
                    errorMessage += ` - ${errorData.detail}`;
                }
                throw new Error(errorMessage);
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
            promptInput.disabled = false;
            modelSelector.disabled = false;
        }
    });
});