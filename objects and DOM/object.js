//I want print object properties

//steps
//creating object
//attaching details for the object
//getting the details and print it

//implementing and also using symbol(hiding the information)

let mysymbol = Symbol;
let siva = {
    fullName: "srimannarayana",
    age: 21,
    college: "MITS",
    [mysymbol]: 'screct things'
};
console.log(siva.fullName);
console.log(siva.age);
console.log(siva.college);

//objet changing 

let person = {
    age: 25,
    friend: "siva"
};
person.age = 23;
console.log(person.age);

//anothed method 

let raja = {
    fullName: "RajaReddy",
};
raja['fullName'] = "rajaReddyGajjala";
console.log(raja.fullName);

