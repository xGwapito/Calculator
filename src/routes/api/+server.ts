export async function post(request) {
  const requestBody = JSON.parse(request.rawBody);
  const expression = requestBody.expression;
  const previousValue = 0;
  const result = calculateResult(previousValue, expression);
  
  return {
    body: JSON.stringify({ result }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin (for testing)
      'Access-Control-Allow-Methods': 'POST', // Allow only POST method
    }
  };
}

function calculateResult(previousValue, expression) {
  const currentValue = parseFloat(expression);
  switch (expression[expression.length - 1]) {
    case "+":
      return (parseFloat(previousValue) + currentValue).toString();
    case "-":
      return (parseFloat(previousValue) - currentValue).toString();
    case "*":
      return (parseFloat(previousValue) * currentValue).toString();
    case "/":
      return (parseFloat(previousValue) / currentValue).toString();
    case "%":
      return (parseFloat(previousValue) % currentValue).toString();
    default:
      return currentValue.toString();
  }
}
