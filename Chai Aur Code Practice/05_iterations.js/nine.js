// Reduce Method

const myNumbs = [1, 2, 3]
// Here acc means accumulator and currval=> current value

// const myTotal = myNumbs.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
    // accumulator value here 0 as we have given 0
// }, 0)

const myTotal = myNumbs.reduce((acc, currval) => acc+currval, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: "2999"
    },
    {
        itemName: "python",
        price: "999"
    },
    {
        itemName: "mobile dev course",
        price: "5999"
    },
    {
        itemName: "data science course",
        price: "12999"
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc +  item.price,0)
console.log(priceToPay);



