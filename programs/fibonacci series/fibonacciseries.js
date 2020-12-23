//I want print the fibonacci series

//steps:
//intilizing values
//for loop for the itaration
//getting the result and print it



let firstNumber = 0, secondNumber = 1;
let results;
console.log(firstNumber);
console.log(secondNumber);
for (let i = 2; i <= 6; i++) {
    results = firstNumber + secondNumber;
    console.log(results);
    firstNumber = secondNumber;
    secondNumber = results;
};
