hello() //chay duoc
function hello() {}

// hello2() //khong chay duoc do khai bao trc
const hello2 = function() {
    console.log("hello2");
}

const helloArr = () => {
    console.log("hello array");
}
helloArr()

document.getElementById("myBtn").addEventListener("click", () => {
    console.log(this);
});

const sum = (a, b) => {
    return a+b;
};

const sum = (a, b) => a+b;
const divideBy = (a, b) => a/b;