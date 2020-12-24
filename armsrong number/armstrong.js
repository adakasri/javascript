let reminder;
let cube;
let sum = 0;
function amstrong(inputNumber) {
    while (inputNumber > 0) {
        reminder = inputNumber % 10;
        cube = reminder * reminder * reminder;
        sum = sum + cube;
        inputNumber = inputNumber / 10;
    } if (sum === inputNumber) {
        console.log("output is", sum);
    } else {
        console.log("output is different", sum);
    }
    return inputNumber;
}
amstrong('siva');
