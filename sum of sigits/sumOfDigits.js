let reminder;
let sum = 0;
function sumOfDigits(inputNumber) {
    while (inputNumber > 0) {
        reminder = inputNumber % 10;
        sum = sum + reminder;
        inputNumber = inputNumber / 10;
    }
    console.log("sum of digits", sum);
    return inputNumber;
}
sumOfDigits(123);