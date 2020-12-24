let addOutput;
let diffOutput;
let mulOutput;
let divOutput;
let modOutput;
function arithmeticOperation(inputNumber, anothertInputNumber) {
     addOutput = inputNumber + anothertInputNumber;
     diffOutput = inputNumber - anothertInputNumber;
     divOutput = inputNumber / anothertInputNumber;
     mulOutput = inputNumber * anothertInputNumber;
     modOutput = inputNumber % anothertInputNumber;
    return inputNumber, anothertInputNumber;
}
arithmeticOperation(15, 10);
console.log('add opertion output is:', addOutput);
console.log('diff opertion output is:', diffOutput);
console.log('div opertion output is:', divOutput);
console.log('mul opertion output is:', mulOutput);
console.log('mod opertion output is:', modOutput);