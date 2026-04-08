exports.handler = async function(event, context) {
  try {
    const data = JSON.parse(event.body);

    const response = await fetch("https://api.upigateway.com/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: data.amount,
        name: data.name
      })
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
