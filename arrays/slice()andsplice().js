//slice()

//slice can only delete the first value and last value of the array
const value = ['a', 'b', 'c', 'd'];

const values1 = value.slice(1, 3);

console.log(values1);

//splice()

//1-It can add and delete the elements in the array
//2-It can delete one element at any position and it can add the elemment in deleted positon

const values = ['a', 'b', 'c', 'd'];
values.splice(2, 0, 'sriman');
console.log(values);