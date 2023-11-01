// Task 1

console.log('Hello World !!!');

// Task 2

// console.log(10 + 10);

// Task 3

// let inputRoot = window.prompt("Enter the Square Root Number : ")

// let squareRoot = Math.sqrt(inputRoot)

// console.log('Square Root : ' + squareRoot);

// Task 4

// let inputArea1 = window.prompt("Enter the Area of trinagle Number1 : ")

// let inputArea2 = window.prompt("Enter the Area of Trinagle Number2 : ")

// let areaRoot = 1/2 * inputArea1 * inputArea2

// console.log("Area of Triangle : " + areaRoot);

// Task 5

var a = 10;
var b = 20;

// console.log("A and B Before : " + a + "and" + b)

const temp = a

a = b

b = temp

// console.log("A and B After Swaping : " + a + "and" + b);

// Global scope

{
    var c = 10;
}

// console.log(c);

// End

// Declared variable in first task

var price = 100000;
const product = "Samsang";
const tax = price + 100;
// console.log(product);
var total = price + tax;
// console.log(total);

// Declared variable in second task

const fruitname = "apple";
const count = 2;
var price = 100;
var total = count * price;
// console.log(fruitname);
// console.log(total);

// Post Increament and Decreament

let postIncreament = 10;
let postDecreament = 10;
postIncreament++;
postDecreament--;
// console.log(postIncreament);
// console.log(postDecreament);

// Pre Increament and Decreament

let preIncreament = 10;
let preDecreament = 10;
++preIncreament;
--preDecreament;
// console.log(preIncreament);
// console.log(preDecreament);

var a = 10;
var b = ++a;

// console.log(b);
// console.log(10 + "")

// Function 

function Category(Samsang, Iphone15, Nokia) {
    console.log("Phone Category : " + Samsang + Iphone15 + Nokia); // string + Undefined = undefined
    console.log(Samsang + Iphone15 + Nokia);  // Undefined + Undefined + Undefined = NaN
};

// Category();

function add(a, b) {
    console.log(a + b);
};

// add();

// console.log(undefined + undefined);

function favourite() {

    const factor = "Lawrence";
    const fplayer = "Kratos";
    const fmovie = "God of Egypt"

    console.log("Favourite Actor : " + factor);
    console.log("Favourite Player : " + fplayer);
    console.log("Favourite Movie : " + fmovie);

};

// favourite();
// favourite();
// favourite()


const area = (length, breath) => {
    console.log(length * breath);
};

let l = 10
let br = 20

// area(l, br);

const Add = (a, b) => {
    return a + b;
};

const addition = Add(20, 20);
// console.log(typeof addition)

// If else

const isRainy = true;

// if (isRainy) { console.log("Take a Umbrella !") } else { console.log("Sunshine !") };

// const isRain = false ? "Take a Umbrella !" : "Sunshine !";
// console.log(isRain);

// const isFinish = true;

// if (isFinish) { console.log("Great Job !") } else { console.log("Finishing Homework After Playing !") };

// const isFinishing = false ? "Great Job !" : "Finishing Homework your After Playing !";
// console.log(isFinishing);

const isCookies = true;

if (isCookies) {
    // console.log("Come to Eating !")
} else { console.log("Waiting for Dinner") };

const isTeeth = true;

if (isTeeth) {
    // console.log("Good Eat Breakfast !")
} else { console.log("Go to bresh !") };

const myBirthday = '16.06.2003';

if (myBirthday == "16.06.2003") {
    // console.log("Happy Birthday Selvaraj");
} else {
    console.log("Advanced Birthday !");
};

// Logical Operator

// console.log(true && true && true);
// console.log(true || false);
// console.error(!true)

const traffic = "";

if (traffic === "green") {
    console.log("Go !");
} else if (traffic === "yellow") {
    console.log("Start Bike !");
} else {
    // console.log("Stop !");
};

const season = "";

if (season === "spring") {
    console.log("Enjoying Spring Season !");
} else if (season === "summer") {
    console.log("Enjoying Summer Season !");
} else if (season === "fall") {
    console.log("Enjoying Fall Season !");
} else if (season === "winter") {
    console.log("Happy Winter !");
} else {
    // console.log("First Declared Variable !");
};

const mark = 0;

if (mark >= 35 && mark < 50) {
    console.log("Improve Your Mark !");
} else if (mark >= 50 && mark < 70) {
    console.log("Great Mark !");
} else if (mark >= 70) {
    console.log("Excelent Performance !");
} else {
    // console.log("Fail !")
};

const number = 2;

if (number % 2 === 0) {  // 2/2
    // 1 = division
    // 0 = remainder
    // console.log("Even Number : " + number);
} else {
    console.log("Odd Number : " + number);
};

const vowel = "";

if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
    console.log("Small Vowel : " + vowel);
} else if (vowel === "A" || vowel === "E" || vowel === "I" || vowel === "O" || vowel === "U") {
    console.log("Caps Vowel : " + vowel);
} else {
    // console.log("Its Constant : " + vowel);
};
// Foor Loop 

for (Apple = 1; Apple <= 5; Apple++) {
    // console.log("Apple : " + Apple);
};

for (let n = 1; n <= 10; n = n + 1) {
    // console.log("Number : " + n);
    // let selva = "selva"

};

for (let number = 1; number <= 10; number = number + 2) {
    // console.log(number);
};

// n = "5"
// console.log(n)

for (let num = 10; num >= 1; num = num - 1) {
    // console.log("Number : " + num);
};

for (let oe = 2; oe <= 10;) {
    // console.log("Number : " + oe);
    oe += 2;
};

for (let tab = 1; tab <= 10; tab = tab + 1) {
    console.log(`${tab} X 2 = ${tab * 2}`);
}