//                  Activity (1)               \\
// Write a simple function which logs “Hello Code 
// Nation” to the console.
// Then write a higher order function which will run 
// our simple function five times, even though you 
// only call it one time.
// Hint: Pass the simple function as a parameter, and 
// this will involve a for loop.

const greetings = () => {
   return `Hello Code Nation`;
}
const theLoop = (loop, cNation) => {
    for (i = 0; i < loop; i++){
       console.log(cNation());
    }
}
theLoop(5, greetings)


//                  Activity (2)                \\
// The array method .map is an example of a higher 
// order function.
// Declare a variable with five numbers, then 
// use .map to iterate through the array and multiply 
// each array item by 3.

let myArray = [1, 2, 3, 4, 5]
for (i = 0; i < myArray.length; i++){
    console.log(myArray[i] * 3)
}

const mapTimes = (times) => {
    let mapArray = myArray.map(x => x * times)
    for (i = 0; i < mapArray.length; i++){
        console.log(mapArray[i])
    }
}
// bu changing the value here you can increase how much the array multiplied by
mapTimes(3)

//              Activity (3)            \\
// Test this function to make 
// sure it works by passing a 
// number to the doMaths 
// function, then passing a 
// number and one of the four 
// maths functions, to the 
// returned function.



const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}
let mathArray = [add, subtract, multiply, divide]
console.log(add(2, 4))
console.log(doMaths(2)(2, add))
console.log(doMaths(2)(2, subtract))
console.log(doMaths(2)(2, multiply))
console.log(doMaths(2)(2, divide))

const myMath =(num1, num2) => {
    for (i = 0; i < mathArray.length; i++){
        console.log(doMaths(num1)(num2, mathArray[i]))
    }
}
myMath(2, 10)


// console.log(doMaths(2)



//##################################################\\
//                  The Chopping Block              \\
//##################################################\\
// const mapArray = myArray.map(function(){
//     for (i = 0; i < myArray.map.length; i++){
//         retur    n mapArray[i] * 3
//     }
    
// })

// console.log(mapArray())

// const arrayLoop = () => {

// }
// const myArray = () => {
//     let array = [1, 2, 3, 4, 5]
//     array
// }
//##################################################\\
//##################################################\\
//##################################################\\