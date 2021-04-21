const foo = {};
const bar = foo;
console.log(bar == foo) //true

const foo2 = {};
const bar2 = {};
console.log(bar2 == foo2) //false
//so sanh dia chi

const arr = [];
const arr2 = arr;
arr.push(1);
console.log(arr2)

function test() {
    arr.push(1) // thay doi truc tiep
    const arr2 = [...arr, 1]; // lay copy
}