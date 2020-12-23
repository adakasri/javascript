//I want print prime number using function

//steps
//creating function
//giving coditions in if loop
//returnd the Number
// receive the number and print it.

//implementing
function primeNumber(inputNumber) {
    if (inputNumber % 2 === 0) {
        console.log(inputNumber, "its not prime nuumber");
    }
    else
        console.log(inputNumber, "its a prime number");
    return inputNumber
} const input = (primeNumber(26));
