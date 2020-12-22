//functions()
function msg() {
  console.log('here is a msg');
}
msg();

function names() {
  console.log('sriman', 'siva');
}
names();

//function expressions


/*let myfunction=function()
{
    console.log('here is a msg');
}
myfunction();*/

//debugging porpose ---(loggingFunction())
let myfunction = function loggingFunction() {
  console.log('here is a msg');
}
myfunction();

//passing information to functions
// I want to pass random text as param and print it inside function/method
function msg(message) {
  console.log(message);
}
msg('hello');
msg('srimanm');

//another methed

function msg1(message, anothermessage) {
  console.log(message, anothermessage);
}
msg1('hello', 'shiva');

//funtions return values
/*function pnumber(number)
{
    let code=number;
    return code;
}console.log(pnumber(9182201557));

//ex 1
function phnumber(number)
{
    //let code=number;
    return number=9182201557;
}console.log(phnumber());

//ex  2
function ponumber(number)
{
    let code=number;
    return code;
}
let num=ponumber(9985565589);
console.log(num);*/

//functins scope
let functionScopeOutsideNumber = 9985565589
function myBroNumber(inputPhoneNumber) {

  const myphonenumber = function () {
    let number = 9182205557;
    console.log('my number', number);
    return number;
  }
  myphonenumber();
  const inputPhoneNumberLocal = inputPhoneNumber;
  console.log('my bro number', inputPhoneNumberLocal);
  return numb;
}
const resultPhoneNumber = myBroNumber(345)
//console.log(resultPhoneNumber);
// I want to print my phone number and my brother phone number

//Steps
//1. Print phone 1
//2. Create local function
//3. print anothor number in local scope
// 4. Return phone number
// 5. Catch returned phone number and print it 

//
/*function myphonenumber(number1)
    {
        let number=number1;
        console.log('my number');
        return number;
    }
    console.log(myphonenumber(9182201557));
*/
