export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    // Replace with your actual Google Apps Script Web App URL
    const googleScriptURL = 'https://script.google.com/macros/s/AKfycbxvSSsfcOQfDbW4hOsDWYxCkr1bkf-5HldFmv0wy_2vWz0BNVercZSEfy9YxeGmHj1N/exec';

    const response = await fetch(googleScriptURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success', result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error', error: error.message }),
    };
  }
}
