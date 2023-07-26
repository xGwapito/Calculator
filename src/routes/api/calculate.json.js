export async function post(request) {
    const requestBody = JSON.parse(request.rawBody);
    const expression = requestBody.expression;
    const result = calculateResult(expression);
    
    return {
      body: JSON.stringify({ result }),
      headers: {
        'Content-Type': 'application/json'
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
