// i want print arithmetic opertions

//steps
//creating function
// opertions
// catch return values and print it

//implementing
let output;
function arithmeticOperation(inputNumber, anothertInputNumber) {
    let addOperation = function () {
        output = inputNumber + anothertInputNumber;
        console.log('add opertion output is:', output);
    }
    addOperation();
    let differenceOperation = function () {
        output = inputNumber - anothertInputNumber;
        console.log('differenc opertion output is:', output);
    }
    differenceOperation();
    let divisionOperation = function () {
        output = inputNumber / anothertInputNumber;
        console.log('divition opertion output is:', output);
    }
    divisionOperation();
    let multiplicationOperation = function () {
        output = inputNumber * anothertInputNumber;
        console.log('multiplication opertion output is:', output);
    }
    multiplicationOperation();
    let modules = function () {
        output = inputNumber % anothertInputNumber;
        console.log('modules opertion output is:', output);
    }
    modules();
    return inputNumber,anothertInputNumber;
}
const inputFrom = arithmeticOperation(15,10);