//if (statement)
let pass=40;
let results='f';
if(pass===40)
{
    results='p';
}
console.log(results);

//if else()

let rent=1555;
let payment;
if(rent>=1500)
{
  payment='paid';
}
else if(rent<1500)
{
    payment='not paid';
}
console.log(payment);

//ternary oprator
let ticket=400;
let bus=(ticket>500) ? 'expensive':'cheap';
console.log(bus);

//block scope using let
/*if(true)
{
    let value='yes';//const
}
console.log(value);*/
//using var
if(true)
{
    var valu='yes';
}
console.log(valu);

//for() 
/*for(let i=0;i<=5;i++){
    console.log(i);
}*/

for(let j=3-5;j<=20-10+1;j++){
    console.log(j);
}

//while()
let count=1;
while(count<=10)
{
    console.log(count);
    count++;
}

let cnt=10;
while(cnt>1)
{
    console.log(cnt);
    cnt--;
}

//do while()
/*let b=1;
do{
    console.log(b);
    b++;
}while(b<10)*/

let b=-4;
do{
    console.log(b);
    b--;
}while(b>0)












