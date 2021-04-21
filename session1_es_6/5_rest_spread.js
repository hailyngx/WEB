const arr = [1];
arr.push(2);
arr.push(3);
console.log(arr.push(3)); //tra ra length cua array sau khi push
console.log(arr.concat(4)); //tra ra array sau khi push ma khong he sua array cu
console.log(arr)

console.log([4, ...arr, 4]) //rest de lay nguyen 1 array
const obj = {
    name: "alice",
    age: 16,
    address: {
        city: "Hanoi",
        district: "Cau Giay",
    },
};

console.log({
    ...obj,
    age: 18, //age is overwritten
    gender: "F"
});

const {
    name, 
    age,
    address: {city, district}
    } = obj;
console.log(name, age, city, district);

const coordinate = [0,1];
const [x, y] = coordinate; //destructuring

// array thuc chat la 1 obj

//primitive 
let x = 1
let y = x // tao 1 gia tri y = 1

//reference
let obj = {}
obj2 = obj
obj.name = "new" // se thay doi cua ca obj va obj2
obj == obj2 //true

let obj = {}
let obj2 = {}
obj == obj2 //false


