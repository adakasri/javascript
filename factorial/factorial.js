let i = 1;
let storingValue = 1;
function factorial(factorialNumber) {
    while (i <= factorialNumber) {
        
        storingValue = storingValue * i;
        var resultFactorial=storingValue;
        i++;
    }
    console.log('factorial of number is:', resultFactorial);
    return factorialNumber;
} const inputNumber = (factorial(5));