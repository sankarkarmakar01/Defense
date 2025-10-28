// let name = "Sankar";
// let age = 20;

// if(true) {
//     let c =90
// }

// age = 30;
// console.log(c)

// console.log(name, age);

// const account = 1234

// // account = 23

// console.log(account)

// old format
// var a = 10;
// var a = 20;

// if (true) {
//   var a = 20;
// }
// function fun(){
//     var c= 20
// }

// var b = 30

// console.log(a);

//* data types

//* primitive datatypes

//* number, string, boolean, undefined, null, bigint, symbol

//^ number
let a = 10;
let b = 2.36;
console.log(a, b);
console.log(typeof a);
console.log(typeof b);

//^ string
let c = "Strike is comming";
let d = "Anjali";
console.log(c, d);
console.log(typeof c);

//^ boolean
let login = true;
let f = false;
console.log(login, f);
console.log(typeof login);

//^ undefined
let user;
// const p;
console.log(user);
console.log(typeof user);

//^ bigint
let n = 212121221212121212n;
console.log(n);
console.log(typeof n);

//^ null
let weather = null;
console.log(weather);
console.log(typeof weather);

// let weather = current_weather("Bankura")

//25
//null
//undefined

//^ symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1);
console.log(id1 == id2);
console.log(typeof id2);

//* non-primitive datatypes
//* array, object, function

//^ array
let arr = [10, 20, 11, "Sankar", true];
console.log(arr);
console.log(typeof arr);

//^ object
let obj = {
  name: "Sankar",
  account: 12312,
  age: 20,
  category: "gen",
};
console.log(obj);
console.log(typeof obj);

//^ function
let s = function add() {
  console.log("Hello");
};
// add();
// console.log(s)
s();
console.log(typeof s);

//* primitive data type is immutable

let aa = 10;
aa = 20;
console.log(aa);

let str = "Sankar";
str = "Sankar Karmakar";
console.log(str);

let arr2 = [10, 20, 30, 40];
console.log(arr2);
arr2.push(90);
console.log(arr2);

let obj2 = {
  name: "Sankar",
  age: 20,
};
console.log(obj2);
obj2.age = 21;
console.log(obj2);

let aaa = 10;
let bbb = aaa;
console.log(aaa);
bbb = 20;
console.log(bbb);

let obj3 = obj2;
obj3.name = "Rohan";
console.log(obj2);
console.log(obj3);
