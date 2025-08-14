// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100

const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined in terminal

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id ===anotherId);

// variable id and anotherId value not same


const bigNumber = 234546424566666n




// Reference (Non primitive)

// Array, Objects, Functions
// # All Non primitve datatype have object return type 

const heros = ["shaktiman", "naagraj", "doga"];
{
    name: "hitesh"
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
    
}

// typeof important further study

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++==

// Stack, Heap

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// Reference means value is changed in original value

