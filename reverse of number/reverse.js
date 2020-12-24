let reminder;
let sum=0;
function reverse(inputNumber)
{
    while (inputNumber > 0) {
        reminder = inputNumber % 10;
        sum = (sum * 10) + reminder;
        inputNumber = inputNumber / 10;
    }
    console.log(sum);
    return inputNumber;
}reverse(123);