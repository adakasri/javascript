let i = 1;
let storingValue = 1;
function factorial(factorialNumber) {
    for (i; i <= factorialNumber; i++) {

        storingValue = storingValue * i;
    }
    console.log('factorial of number is:', storingValue);
    return factorialNumber;
}  factorial(5);
