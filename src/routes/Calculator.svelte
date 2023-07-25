<script>
    let displayValue = "0";
    let currentOperator = null;
    let previousValue = null;
  
    //For Decimal
    function handleNumberClick(event) {
      const numberClicked = event.target.textContent;
      if (numberClicked === "." && displayValue.includes(".")) {
        return;
      }
      displayValue = displayValue === "0" ? numberClicked : displayValue + numberClicked;
    }
    
    //Equal button
    function handleOperatorClick(event) {
      const operatorClicked = event.target.textContent;
      if (operatorClicked === "=") {
        handleEqualClick();
      } else {
        currentOperator = operatorClicked;
        previousValue = displayValue;
        displayValue = "0";
      }
    }
    
    //Switch Case for Operators
    function handleEqualClick() {
      const currentValue = parseFloat(displayValue);
      switch (currentOperator) {
        case "+":
          displayValue = (parseFloat(previousValue) + currentValue).toString();
          break;
        case "-":
          displayValue = (parseFloat(previousValue) - currentValue).toString();
          break;
        case "*":
          displayValue = (parseFloat(previousValue) * currentValue).toString();
          break;
        case "/":
          displayValue = (parseFloat(previousValue) / currentValue).toString();
          break;
        case "%":
          displayValue = (parseFloat(previousValue) % currentValue).toString();
          break;
        default:
          break;
      }
      currentOperator = null;
      previousValue = null;
    }
  
    //Clear Button
    function handleClearClick() {
      displayValue = "0";
      currentOperator = null;
      previousValue = null;
    }
  
    //Back Button
    function handleBackClick() {
      displayValue = displayValue.slice(0, -1);
      if (displayValue === "") {
        displayValue = "0";
      }
    }
  </script>
  
  <main>
    <div class="calculator">
      <div class="display">{displayValue}</div>
      <div class="row">
        <button on:click={handleClearClick} class="clear">AC</button>
        <button on:click={handleNumberClick}>7</button>
        <button on:click={handleNumberClick}>4</button>
        <button on:click={handleNumberClick}>1</button>
        <button on:click={handleNumberClick}>0</button>
      </div>
      <div class="row">
        <button class="operator" on:click={handleOperatorClick}>%</button>
        <button on:click={handleNumberClick}>8</button>
        <button on:click={handleNumberClick}>5</button>
        <button on:click={handleNumberClick}>2</button>
        <button on:click={handleNumberClick}>.</button>
      </div>
      <div class="row">
        <button class="operator" on:click={handleOperatorClick}>/</button>
        <button on:click={handleNumberClick}>9</button>
        <button on:click={handleNumberClick}>6</button>
        <button on:click={handleNumberClick}>3</button>
        <button on:click={handleNumberClick}>00</button>
      </div>
      <div class="row">
        <button on:click={handleBackClick} class="back">B</button> 
        <button class="operator" on:click={handleOperatorClick}>+</button>
        <button class="operator" on:click={handleOperatorClick}>-</button>
        <button class="operator" on:click={handleOperatorClick}>*</button>
        <button on:click={handleOperatorClick} class="equal">=</button>
      </div>
    </div>
  </main>
  
  <style>
    @import './calculator.css';
  </style>
  