//functions()
function msg()
{
    console.log('here is a msg');
}
msg();

function names()
{
    console.log('sriman','siva');
}
names();

//function expressions


/*let myfunction=function()
{
    console.log('here is a msg');
}
myfunction();*/

//debugging porpose ---(loggingFunction())
let myfunction=function loggingFunction()
{
    console.log('here is a msg');
}
myfunction();

//passing information to functions
function msg(message)
{
    console.log(message);
}
msg('hello');
msg('srimanm');

//another methed

function msg1(message,anothermessage)
{
    console.log(message,anothermessage);
}
msg1('hello','shiva');

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
number=9985565589
function mybronumber(number1)
{
    var myphonenumber=function()
    {
        let number=9182205557;
        console.log('my number',number);
        return number;
    }
    let numb=number;
    console.log('my bro number',number);
    return numb;
}console.log(mybronumber());


//
/*function myphonenumber(number1)
    {
        let number=number1;
        console.log('my number');
        return number;
    }
    console.log(myphonenumber(9182201557));
*/