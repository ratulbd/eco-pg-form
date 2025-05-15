export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    console.log('Received data:', data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success', data }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON', error: error.message }),
    };
  }
}
