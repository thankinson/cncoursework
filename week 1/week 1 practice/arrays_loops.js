// const power = (num1, num2) =>{
//     return num1 ** num2;
// }

// console.log(power(2, 3));





// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ]

// console.log(coffeeOrder);
// console.log(coffeeOrder.length);// returns leagth of array
// console.log(coffeeOrder[2]); // returns item in index position 2 which is Charlie - Whatever's 
// coffeeOrder[1] = "Ann - Vanilla latte";
// console.log(coffeeOrder);
// console.log(coffeeOrder.length);
// // console.log(coffeeOrder.length[1]) // this is wrong. needs to defined afterthe variable
// console.log(coffeeOrder[1].length); // returns the leagnth of item in position 1 - returns 19
// coffeeOrder.push("Donna - espresso"); // pushes new item to end off array
// console.log(coffeeOrder);
// coffeeOrder.pop();
// console.log(coffeeOrder);
// console.log(coffeeOrder[2]);


//                  loops                   \\
let favDrinks = [
    "Coke",
    "Fantas",
    "Tonic",
    "Red Bull"
];

// this loop will print out each item in the list.
// drinksIndex=0 sets to 0 (which is 1)
// drinksIndex<favDrinks.length checks to see if the legnth matchs the array (which is 4)
// drinksIndex++ will add 1 each time it loops until the loop count is no longer less than array legnth
for (let drinksIndex=0; drinksIndex<favDrinks.length; drinksIndex++){
    console.log(favDrinks[drinksIndex]);
}
console.log(favDrinks.length)

for (let i = 0; i<favDrinks; i++){
    console.log(favDrinks[drinksIndex]);
}
//          2 x table           \\
// this loop will build the array
let multiplesTwo = [];

// if "i" equels 0 and less than 20 it will return numbers that can be divided by 2 (or 2 times table)
for (let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}
// The push() method adds one or more elements to the end of an array and returns the new length of the array. 
console.log(`numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);
// adding <= 20 will let it go to 20
for (let i = 0; i <= 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}

console.log(`numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// const sumOfNums = (min, max) => {
//     let sums = 0;
//     for(let i = min; i < max + 1; i++){
//         sums += i;
//     }
//     return sumOfNums;
// }

// console.log(`Sum of all number from 1 to 10 is ${sumOfNums(1,10)}`);

const sumOfNums = (min, max) => {
    let sums = 0;
    for(let i = min; i < max + 1; i++){
        sums += i;
    }
    return sums;
}

console.log(`Sum of all number from 1 to 10 is ${sumOfNums(1,10)}`);


//          while loop          \\
// let i = 0;
// while ( i <= 10){
//     console.log(i++);
// }
// while i = 0 and <= 10 cosnole will count until 10
let i = 0;
while ( i <= 10){
    console.log(i);
    i++
}

// age check
let age = 15;
while (age < 18){
    console.log("you are a child");
    age++
}

console.log("you are an adult");

//          \\
let randomnumber = 0;

while (randomnumber < 10){
    console.log("random no. " + randomnumber + "\n keep logging");
    randomnumber = (Math.round(Math.random() * 20));

}

console.log("No more looping, with random no. " + randomnumber);

//      cards       \\
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "club";

while (currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log(currentCard);