const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");
    
} else {
    console.log("Don't have user email");
    
}


// # Importand topic study further
// falsy values

// false, 0, -0, Bigint On, "", null, undefined, NaN

// truthy values

// "o", "false", " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

 console.log(val1);

 // Ternary Operator => syntax of if else

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80");


 
