let sum = 0;
let reminder, term;
inputNumber = 121;
term = inputNumber;
while (inputNumber > 0) {
    reminder = inputNumber % 10;
    sum = (sum * 10) + reminder;
    inputNumber = inputNumber / 10;
}
if (term === sum) {
    console.log(inputNumber, "its palindrome");
}
else
    console.log(inputNumber, "it is not palindrome");


