//passing obects to functions

//implementing

let person = {
    name: "sriman",
    brother: "sivanagaraju",
    brotherAge: 23,
    showingInformation: function () {
        console.log(this.brother + "  is  " + this.brotherAge);
    }
};
person.showingInformation();


//another example

let sriman = {
    age: 25,
    college: "MITS"
};
function incrementAge(siman) {
    siman.age++;
}
incrementAge(sriman);
console.log(sriman.age);

//
let message="hello";
function changingMessage(message)
{
    message="hi sri";
}
changingMessage(message);
console.log(message);


