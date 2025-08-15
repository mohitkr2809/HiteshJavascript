const coding = ["js", "ruby", "java", "python", "cpp"]


// callback function
// coding.forEach(function (val) {
//     console.log(val);
    
// })


// callback function with use arrow function

// coding.forEach((item) => {
//      console.log(item);
     
// })

// function printMe(item){
//     console.log(item);
    
// }
// give reference not execute
// coding.forEach(printMe)


// coding.forEach((item, index, arr)=> {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})