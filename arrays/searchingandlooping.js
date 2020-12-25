//indexOf()

//It is using for searching element 
// searching element is in array then it will show the positin
//and if you searching element it is not there in the array then it will print-->(-1)
const values = ['a', 'b', 'c', 'd'];

console.log(values.indexOf('e'));


//filter()

const value = ['a', 'b', 'c', 'd', 'e'];

const set = value.filter(function (item) {

    return item > 'c';
});
console.log(set);

//find()

const arrarValue1 = ['a', 'b', 'sriman', 'd', 'e'];

const found = arrarValue1.find(function (searchingElement) {

    return searchingElement.length > 2; //why not use '='.
})
console.log(found);


//forEach()


const value111 = ['a', 'b', 'c', 'd', 'e'];

const set1 = value.forEach(function (items) {
    console.log(items);

});









