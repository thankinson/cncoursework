//      acticity 1      \\

// Write code that stores your name, age, and favourite 
// colour
// The stored data must be output to the console in a 
// complete sentence

const people = {
    firstName: "Tom",
    lastName: "Hankinson",
    dOb: '27/12/1985',
    faveColour: "Red",
    hobbies: ["Guitar",
              "Game",
              "Films",
              "TV"
            ]
    
};

console.log(people);

console.log(`My name is ${people.firstName} and my favourite colour is ${people.faveColour} and enjoy playing ${people.hobbies[0]}`);

//      activity 2      \\

// Write code which stores what you may eat today for 
// breakfast, lunch, and dinner
// This must also be output to the console as a complete 
// sentence
// Update the stored data and output the same sentence 
// again to display the changes

const meals = {
    breakfast: ['Cereal', 'Bacon and egg', 'beans on toast'],
    lunch: ['cheese and onion roll', 'ham and stuffing sandwich', 'chicken soup'],
    dinner: ['pizza', 'lasagne and chipc', 'roast dinner']
};

console.log(meals);

console.log(`For breakfast today i had ${meals.breakfast[1]}. for lunch i will have ${meals.lunch[0]} and to end the day i will have ${meals.dinner[1]}`);

meals.dinner.push('beans on toast');

console.log(meals.dinner)
console.log(meals)

console.log(`tomorow for breakfast today i will have ${meals.breakfast[0]}. for lunch i will have ${meals.lunch[1]} and to end the day i will have ${meals.dinner[3]}.`);

//      activity 3      \\

// Write code which will calculate how many days from 
// today’s date to your birthday
// This must also be output to the console as a 
// complete sentence

let oneDay = 24*60*60*1000; 
let today = new Date();
let dayOfBirth = new Date(1985, 11, 27); // the month is 0 indexed
let dayMonth = [27, 12]

// milliseconds since birth
console.log(`the date is ${today}`);
console.log(`${Date.parse(dayOfBirth)} milliseconds since birth`);

//days since birth
let diffDays = Math.round(Math.abs((dayOfBirth.getTime() - today.getTime())/(oneDay)));
console.log(`${diffDays} since birth`);

// days until next birthday 

const getNextBday = () =>{
    let nextBday = new Date(today.getFullYear(), dayMonth[1] -1, dayMonth[0]);
    if (today.getTime() > nextBday.getTime()){
        nextBday.setFullYear(nextBday.getFullYear()+1);
    }
    let differnce = nextBday.getTime() - today.getTime();
    let daysTo = Math.ceil(differnce/(oneDay));
    console.log(daysTo);
}

getNextBday()

//      activity 4      \\

// Create 9 variables - space1, space 2… 
// space 9
// Assign either the value of ‘x’, ‘o’, ‘ ‘ to 
// each of the variables
// Using template literals inject the 
// variable data into your board
// Output this to the console


let space1 = "o";
let space2 = "o";
let space3 = "x";
let space4 = " ";
let space5 = " ";
let space6 = " ";
let space7 = "x";
let space8 = " ";
let space9 = "o";

// console.log("   |   |   ");
// console.log(` ${space1} | ${space2} | ${space3} `);
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log(` ${space4} | ${space5} | ${space6} `);
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log(` ${space7} | ${space8} | ${space9} `);
// console.log("   |   |   ");

let theGrid = `   
   |   |
 ${space1} | ${space2} | ${space3}
   |   |
------------
   |   |
 ${space4} | ${space5} | ${space6} 
   |   |
------------
   |   |
 ${space7} | ${space8} | ${space9}
   |   |`;


const theGame = () =>{
    console.log(theGrid)
    switch (true){
        case space1 == space2 && space1 == space3 && space2 == space3:
            console.log("you win");
            break;
        case space1 == space5 && space1 == space9 && space5 == space9:
            console.log("you win");
            break;
        case space1 == space4 && space4 == space7 && space1 == space7:
            console.log("you win");
            break;
        case space2 == space5 && space2 == space8 && space5 == space8:
            console.log("you win");
            break;
        case space3 == space6 && space3 == space9 && space6 == space9:
            console.log("you win");
            break;
        case space3 == space5 && space3 == space7 && space5 == space7:
            console.log("you win");
            break;
        default:
            console.log("No one wins");
    };

};

theGame();