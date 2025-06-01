// This is the code for your Cloudflare Worker
// It will live at something like: your-worker-name.your-username.workers.dev

export default {
    async fetch(request, env) {
        return handleRequest(request, env);
    }
  };
  
  async function handleRequest(request, env) {
    // Define your allowed origin. For development, this is your localhost.
    // For production, you'd change this to your deployed website's URL.
    const allowedOrigin = 'http://localhost:5503';
    // Alternative for wider access during initial testing (less secure for production):
    // const allowedOrigin = '*';
  
  
    // --- CORS Preflight (OPTIONS) Request Handling ---
    // Browsers send an OPTIONS request first for "non-simple" requests (like POST with JSON).
    if (request.method === 'OPTIONS') {
      // Construct CORS headers for the preflight response
      const corsHeaders = {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'POST, OPTIONS', // Specify allowed methods
        'Access-Control-Allow-Headers': 'Content-Type',  // Specify allowed headers (client sends Content-Type)
        'Access-Control-Max-Age': '86400', // Optional: How long the result of the preflight request can be cached
      };
      return new Response(null, {
        status: 204, // No Content - standard for successful preflight
        headers: corsHeaders
      });
    }
  
    // --- Actual Request Handling (e.g., POST) ---
    // These headers will be applied to actual responses (POST, errors, etc.)
    const responseCorsHeaders = {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Content-Type': 'application/json' // All our responses will be JSON
    };
  
    // Only allow POST requests for the main logic
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed. Only POST is accepted.' }), {
        status: 405, // Method Not Allowed
        headers: responseCorsHeaders
      });
    }
  
    try {
      // Check if the incoming request has the correct Content-Type
      const contentType = request.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        return new Response(JSON.stringify({ error: 'Invalid Content-Type. Expected application/json.' }), {
          status: 415, // Unsupported Media Type
          headers: responseCorsHeaders
        });
      }
  
      let requestPayload;
      try {
        requestPayload = await request.json();
      } catch (e) {
        return new Response(JSON.stringify({ error: 'Invalid JSON in request body. Please ensure you are sending valid JSON.' }), {
          status: 400, // Bad Request
          headers: responseCorsHeaders
        });
      }
      
      const { prompt } = requestPayload;
  
      if (!prompt) {
        return new Response(JSON.stringify({ error: 'Prompt is required in the JSON body' }), {
          status: 400, // Bad Request
          headers: responseCorsHeaders
        });
      }
  
      // Retrieve the API key from environment variables
      // 'env' is a global object provided by Cloudflare Workers for accessing secrets/variables
      const GROQ_API_KEY = env.GROQ_API_KEY; 
  
      if (!GROQ_API_KEY) {
        console.error("GROQ_API_KEY is not set in Worker environment variables.");
        return new Response(JSON.stringify({ error: 'API key not configured on the server (worker).' }), {
          status: 500, // Internal Server Error
          headers: responseCorsHeaders
        });
      }
  
      const groqApiResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192', // Or your preferred model
          messages: [
            {
              role: 'user',
              content: prompt,
            },
          ],
          // temperature: 0.7, // Optional
          // max_tokens: 1024, // Optional
        }),
      });
  
      const responseBodyText = await groqApiResponse.text(); // Read as text for robust error handling
  
      if (!groqApiResponse.ok) {
        console.error('Groq API Error:', groqApiResponse.status, responseBodyText);
        let detailedError = `Groq API Error: ${groqApiResponse.status}`;
        try {
          const errorJson = JSON.parse(responseBodyText);
          if (errorJson.error && errorJson.error.message) {
            detailedError += ` - ${errorJson.error.message}`;
          } else if (typeof errorJson.error === 'string') {
            detailedError += ` - ${errorJson.error}`;
          } else {
            detailedError += ` - ${responseBodyText.substring(0, 200)}`; // Show part of the raw response
          }
        } catch (e) {
          detailedError += ` - ${responseBodyText.substring(0, 200)}`; // Response was not JSON
        }
        return new Response(JSON.stringify({ error: detailedError }), {
          status: groqApiResponse.status, // Propagate Groq's error status
          headers: responseCorsHeaders
        });
      }
  
      const data = JSON.parse(responseBodyText); // Now parse the successful JSON
  
      if (data.choices && data.choices.length > 0 && data.choices[0].message) {
        return new Response(JSON.stringify({ response: data.choices[0].message.content }), {
          status: 200, // OK
          headers: responseCorsHeaders
        });
      } else {
        console.error('Unexpected Groq API response structure:', data);
        return new Response(JSON.stringify({ error: 'Unexpected response structure from Groq API' }), {
          status: 500, // Internal Server Error
          headers: responseCorsHeaders
        });
      }
  
    } catch (error) {
      console.error('Error in worker main logic:', error);
      let errorMessage = 'An internal server error occurred in the worker.';
      // Be careful about exposing too much detail from generic errors
      if (error.message) {
          // For SyntaxError from request.json(), it's okay to be more specific
          if (error instanceof SyntaxError && error.message.toLowerCase().includes("json")) {
              errorMessage = "Failed to parse JSON request: " + error.message;
          } else {
              // For other errors, keep it generic or log more details internally
              // errorMessage = error.message; // Potentially too much detail for client
          }
      }
      return new Response(JSON.stringify({ error: errorMessage }), {
        status: 500, // Internal Server Error
        headers: responseCorsHeaders
      });
    }
  }