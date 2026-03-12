// 1. halfNumber()
function halfNumber(num) {
    const result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
}

// 2. squareNumber()
function squareNumber(num) {
    const result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
}

// 3. percentOf()
function percentOf(part, whole) {
    const result = (part / whole) * 100;
    console.log(`${part} is ${result}% of ${whole}.`);
    return result;
}

// 4. findModulus()
function findModulus(num1, num2) {
    const result = num2 % num1;
    console.log(`${result} is the modulus of ${num1} and ${num2}.`);
    return result;
}