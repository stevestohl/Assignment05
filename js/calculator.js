// Calculator

function calculate(x, y, operation) {
    let result;
    switch (operation) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
        default:
            result = null; // signals invalid operation
    }
    return result;
}

let again = "yes";
do {
    // Ask for first number
    let num1 = parseFloat(prompt("Enter the first number:"));

    // Ask for second number
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Ask for operation
    let operation = prompt("Enter an operation: add, subtract, multiply, or divide").toLowerCase();

    // Perform calculation
    let answer = calculate(num1, num2, operation);

    // Check for invalid operation
    if (answer === null) {
        alert("Invalid operation. Please try again.");
    } else {
        alert(`The result of ${operation}ing ${num1} and ${num2} is ${answer}.`);
    }
    // Ask if user wants to run again
    again = prompt("Would you like to run the calculator again? (yes/no)").toLowerCase();

} while (again === "yes");
alert("Calculator has exited.");