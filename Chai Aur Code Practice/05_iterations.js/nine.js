// Reduce Method

const myNumbs = [1, 2, 3]
// Here acc means accumulator

const myTotal = myNumbs.reduce(function (acc, currval) {
    return acc + currval
}, 0)

console.log(myTotal);


