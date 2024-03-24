/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }

function addNumbers() {

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    let sum = add(addNumber1, addNumber2);
    document.querySelector('#sum').value = sum;
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
  }

function subtractNumbers() {
    const subtract1 = parseFloat(document.getElementById('subtract1').value);
    const subtract2 = parseFloat(document.getElementById('subtract2').value);
    const differenceResult = subtract(subtract1, subtract2); // Calling the "subtract" function
    document.getElementById('difference').value = differenceResult;
}

// Add event listener to the button for subtracting numbers
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  const factor1 = parseFloat(document.getElementById('factor1').value);
  const factor2 = parseFloat(document.getElementById('factor2').value);
  const productResult = multiply(factor1, factor2); // Calling the "multiply" function
  document.getElementById('product').value = productResult;
};

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

// Function Declaration - Divide Function
function divide(number1, number2) {
    return number1 / number2;
  }
  // Arrow Function - DivideNumbers Function
  const divideNumbers = () => {
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);
    const quotientResult = divide(dividend, divisor); // Calling the "divide" function
    document.getElementById('quotient').value = quotientResult;
  };
  // Add event listener to the button for dividing numbers
  document.getElementById('divideNumbers').addEventListener('click', divideNumbers);
  

/* Decision Structure */

document.getElementById('getTotal').addEventListener('click', function() {
    // Declare and instantiate a variable to store the numeric value entered by the user in the subtotal field
    const subtotal = parseFloat(document.getElementById('subtotal').value);
  
    // Check if the membership checkbox has been checked to apply a 20% discount
    const membershipCheckbox = document.getElementById('member');
    const discount = membershipCheckbox.checked ? 0.2 : 0;
  
    // Calculate the total due after applying the discount
    const totalDue = subtotal * (1 - discount);
  
    // Output the total to the total span in the format shown with two decimals using a template string
    document.getElementById('total').textContent = `Total Due: $${totalDue.toFixed(2)}`;
  });
  

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = Array.from({length: 13}, (_, i) => i + 1);

document.getElementById('array').textContent = numbersArray;

/* Output Odds Only Array */

const oddNumbers = numbersArray.filter(num => num % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers;

/* Output Evens Only Array */

const evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.getElementById('evens').textContent = evenNumbers;

/* Output Sum of Org. Array */

const sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

/* Output Multiplied by 2 Array */

const multiplied = numbersArray.map(num => num * 2);
document.getElementById('multiplied').textContent = multiplied;

/* Output Sum of Multiplied by 2 Array */

const sumOfMultiplied = multiplied.reduce((acc, curr) => acc + curr, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;


/* Testing1*/