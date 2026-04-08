exports.handler = async function(event, context) {
  try {
    const data = JSON.parse(event.body);

    const response = await fetch('https://merchant.upigateway.com/api/create_order', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: "15ff4049-df56-40ce-b9c0-4f7b1d179f7d",
        client_txn_id: data.orderId,
        amount: data.amount,
        p_info: data.info,
        customer_name: data.name,
        customer_email: "customer@smartprint.com",
        customer_mobile: "9999999999",
        redirect_url: data.redirectUrl
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
