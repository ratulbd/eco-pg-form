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
    const googleScriptURL = 'https://script.google.com/macros/s/AKfycbzM0069-5MgbR-yETb2d2Sob9Ufg4EumeHWx14nhWyn5koPx2aYCR01Mj9SJ6U75xAr/exec';

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
