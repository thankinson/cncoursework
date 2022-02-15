let stringLet = "let string";
var stringVar = "var string";

const newString = () =>{
    let stringLet = "new let string";
    var stringVar = "new var string";

    console.log(stringLet);
    console.log(stringVar);
}

newString()

console.log(stringLet);
console.log(stringVar);
// console.log()

// var newVar = [newString]


// console.log(newVar)


// ############################################################################

const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}

const greet = (time, fn) => {
    if (time < 1200){
        fn("Morning")
    } else if (time >= 1200 && time < 1800) {
        fn("Afternoon");
    } else {
        fn("Evening")
    }
}

greet(1400, whichGreeting)


// let num2 = 3
const add = (num1) => {
    return (num2) => {
        return num1 + num2;
    }
}

console.log(add(2)(3))