// The chopping block is for testing code then comenting it out
// basicly butchers shop of hrorrs for code.

// let oneDay = 24*60*60*1000; 
// let today = new Date();
// let dayOfBirth = new Date(1985, 11, 27); // the month is 0 indexed
// let dayMonth = [27, 12]

// // milliseconds since birth
// console.log(today);
// console.log(Date.parse(dayOfBirth), Date.now());

// //days since birth
// let diffDays = Math.round(Math.abs((dayOfBirth.getTime() - today.getTime())/(oneDay)));
// console.log(`${diffDays} since birth`)

// // days until next birthday 


// const getNextBday = () =>{
//     let nextBday = new Date(today.getFullYear(), dayMonth[1] -1, dayMonth[0]);
//     if (today.getTime() > nextBday.getTime()){
//         nextBday.setFullYear(nextBday.getFullYear()+1)
//     }
//     differnce = nextBday.getTime() - today.getTime();
//     daysTo = Math.ceil(differnce/(oneDay));
//     console.log(daysTo);
// }

// getNextBday()


// let num = 15;

// switch (num) {
//     case num % 3 == 0 && num % 5 == 0:
//         console.log("fizzbuzz");
//         break;
//     case num % 5 == 0:
//         console.log("buzz");
//         break;
//     case num % 3 == 0:
//         console.log("fizz");
//         break;
//     default:
//         console.log(num);
// }



// let placeOfWork = "work"
// let townOfHome = "home"

// if (time == 8){
//     console.log(`Time is ${time} and i am commutubf to ${placeOfWork}`);
// } else if (time == 9){
//     console.log(`Time is ${time} and i am at ${placeOfWork}`);
// } else {
//     console.log(`Time is ${time} and i am at ${townOfHome}`);
// }

// const placeOfWorkIf = (time) =>{
//     let location = ['home', 'commuting', 'work']
//     if (time >= 800 && time < 900 || time >=1700 && time < 1800){
//         console.log(`The time is ${time} and i am  ${location[1]}`);

//     } else if (time <= 700 || time >= 1800){
//         console.log(`The time is ${time} and i am  ${location[0]}`);
//     } else {
//         console.log(`The time is ${time} and i am  ${location[2]}`);
//     }

    
// }
// // i was aiming to use Militery time but it didnt like 0700 and kept returning 448 instead of 0700
// placeOfWorkIf(700)
// placeOfWorkIf(850)
// placeOfWorkIf(1200)
// placeOfWorkIf(1730)
// placeOfWorkIf(1800)
// console.log(0700) // displays the unfortune number of 448


// let vowels = ['a', 'e', 'i', 'o', 'u']
// console.log("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi".lastIndexOf())

// const lastVowel = s => (s.match(/[aeiou]/ig) || "").slice(-1);
// ["jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"].forEach(e => console.log(`"${e}" => "${lastVowel(e)}"`));

// function endVowel(x){
// 	var y = x.toLowerCase();
// 	var indexOfLastVowel = Math.max(y.lastIndexOf("a"), y.lastIndexOf("e"), y.lastIndexOf("i"), y.lastIndexOf("o"), y.lastIndexOf("u"));
// 	return x.charAt(indexOfLastVowel);
// }

// console.log(endVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"));


// const findLastVowel = (string) =>{
//     var x = string.toLowerCase();
//     var theLastVowel = Math.max(x.lastIndexOf("a"), x.lastIndexOf("e"), x.lastIndexOf("i"), x.lastIndexOf("o"), x.lastIndexOf("u"));
//     console.log(theLastVowel)
//     return x.charAt(theLastVowel);
    
// }

// console.log(findLastVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"));

// console.log(findLastVowel("jA long time Ago in a galaxy not so far away"));

// let word = "eagle"


// console.log(word);
// console.log(wordRev);

// // ch7 as if

// const matchLettersIf = (word) => {
//     let wordRev = word.split('').reverse().join('');
//     if (word[0] == wordRev[0]){
//         console.log(`${word}: first and last letters match`);
//     } else {
//         console.log(`${word}: first and last letters do not match`);
//     }
// }

// matchLettersIf("eagale");
// matchLettersIf("bird")
// // ch7 as switch

// const matchLetterSwitch = (word) => {
//     let wordRev = word.split('').reverse().join('');
//     switch (true){
//         case word[0] == wordRev[0]:
//         console.log(`${word}: first and last letters match`);
//         break;
//     default:
//         console.log(`${word}: first and last letters do not match`);
//     };
// };

// matchLetterSwitch("trout")
// matchLetterSwitch("fish")

// let num1 = 9;
// let num2 = 3;
// let sum = num1 + num2;

// ch8 as if

// const evensIf = (num1, num2) => { 
//     let sum = num1 + num2 // adds num1 and num2 together
//     if (sum % 2 == 0){ // checks if it can be divide evenly and if so its printed in terminal
//         console.log(sum);
//     } else {
//         console.log(num1 * num2) // if it cant its multiplied and printed in terminal
//     }
// }
// evensIf(2, 2) // var goes in here

// // ch8 as switch

// const evensSwitch = (num1, num2) => { 
//     let sum = num1 + num2 // adds num1 and num2 together
//     switch (true){
//         case sum % 2 == 0: // checks if it can be divide evenly and if so its printed in terminal
//             console.log(sum);
//             break
//         default:
//             console.log(num1 * num2); // if it cant its multiplied and printed in terminal
    
//     }
    
// }
// evensSwitch(7, 2) // var goes in here


// let space1 = "o";
// let space2 = "o";
// let space3 = "x";
// let space4 = " ";
// let space5 = " ";
// let space6 = " ";
// let space7 = "x";
// let space8 = " ";
// let space9 = "o";

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

// switch (true){
//     case space1 == space2 && space1 == space3 && space2 == space3:
//         console.log("you win")
//         break;
//     case space1 == space5 && space1 == space9 && space5 == space9:
//         console.log("you win")
//         break;
//     case space1 == space4 && space4 == space7 && space1 == space7:
//         console.log("you win")
//         break;
//     case space2 == space5 && space2 == space8 && space5 == space8:
//         console.log("you win")
//         break;
//     case space3 == space6 && space3 == space9 && space6 == space9:
//         console.log("you win")
//         break;
//     case space3 == space5 && space3 == space7 && space5 == space7:
//         console.log("you win")
//         break;
//     default:
//         console.log("No one wins");
// }


// const person = {
//     firstName: "Tom",
//     lastName: "Hankinson",
//     dOb: [27, 12, 1985],
//     age: 36,
//     lokks: {
//         eyeColour: "Blue",
//         hairColour: "Brown"
//     },
//     sayHi() {
//         console.log(`Hello, my name is ${this.firstName}`);
//     }
// };

// const person = {
//     firstName: "Tom",
//     lastName: "Hankinson",
//     dOb: [27, 12, 1985],
//     age: 36,
//     sayHi() {
//         console.log(`Hello my name is ${this.firstName}`);
//     }

// }

// console.log(person.sayHi());

// const coffeShop = {
//     branch: "Liverpool",
//     theDrinks: ["coffee", "tea", "Diet Pepsi", "Pepsi", "Coke", "Diet Coke" [3, 2, 3, 3, 4, 4,]],
//     theFood: ["chips", "burger", "pizza", "salad", "tuna sanwhich"],
//     drinksOrderd(drinksInput) {
//         console.log(`${this.theDrinks[drinksInput]}`);
//     },
//     foodOrderd(foodInput) {
//         console.log(` your ${thefoodInput} `)
//     }
    
// }

// console.log()





// const coffeShop = {
//     branch: "Liverpool",
//     theDrinks: [["coffee", "tea", "Diet Pepsi", "Pepsi", "Coke", "Diet Coke"], [3, 2, 3, 3, 4, 4,]],
//     theFood: ["chips", "burger", "pizza", "salad", "tuna sanwhich"],
//     drinksOrderd(drinksInput) {
//         switch(this.drinksInput){
//             case drinksInput = this.theDrinks[0][0]:
//                 console.log(`your ${drinksInput} is £${this.theDrinks[1][0]}`);
//                 break;
//             case drinksInput = this.theDrinks[0][1]:
//                 console.log(`your ${drinksInput} is £${this.theDrinks[1][1]}`);
//                 break;
//             case drinksInput = this.theDrinks[0][2]:
//                 console.log(`your ${drinksInput} is £${this.theDrinks[1][2]}`);
//                 break;
//             case drinksInput = this.theDrinks[0][3]:
//                 console.log(`your ${drinksInput} is £${this.theDrinks[1][3]}`);
//                 break;
//             case drinksInput = this.theDrinks[0][2]:
//                 console.log(`your ${drinksInput} is £${this.theDrinks[1][4]}`);
//                 break;
//             case drinksInput = this.theDrinks[0][3]:
//                 console.log(`your ${drinksInput} is £${this.theDrinks[1][5]}`);
//                 break;
//             }   

//     }   
// }  

// console.log(coffeShop.drinksOrderd("tea"))


// console.log(coffeShop.drinksOrderd(theDrinks[0][0]))


// drinksInput = theDrinks[0][2]
// switch(drinksInput){
//         case drinksInput = theDrinks[0][0]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][0]}`);
//             break;
//         case drinksInput = theDrinks[0][1]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][1]}`);
//             break;
//         case drinksInput = theDrinks[0][2]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][2]}`);
//             break;
//         case drinksInput = theDrinks[0][3]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][3]}`);
//             break;
//         case drinksInput = theDrinks[0][2]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][4]}`);
//             break;
//         case drinksInput = theDrinks[0][3]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][5]}`);
//             break;
//     }

// let theDrinks = [["coffee", "tea", "Diet Pepsi", "Pepsi", "Coke", "Diet Coke"], [3, 2, 3, 3, 4, 4]];
// let theFood = ["chips", "burger", "pizza", "salad", "tuna sanwhich"];

// const coffeShop = {
//     branch: "Liverpool",
//     // drinks: true; 
//     theDrinks: [["coffee", "tea", "Diet Pepsi", "Pepsi", "Coke", "Diet Coke"], [3, 2, 3, 3, 4, 4,]],
//     theFood: ["chips", "burger", "pizza", "salad", "tuna sanwhich"],
//         drinksOrderd(whatdrink){
//             if (whatdrink = this.theDrinks[0][0]){
//                 console.log(`your ${whatdrink} is`)
//                 console.log(whatdrink)
//             }
//         }
// }

// coffeShop.drinksOrderd()





// let theDrinks = [["coffee", "tea", "Diet Pepsi", "Pepsi", "Coke", "Diet Coke"], [3, 2, 3, 3, 4, 4]];

// function drinksOrderd(whatDrink) {
// if (whatDrink = theDrinks[0][0]){
//     console.log(`your ${whatDrink}`)
// } else if (whatDrink = theDrinks[0][1]){
//     console.log(`your ${whatDrink}`)
// } else if (whatDrink = theDrinks[0][2]){
//     console.log(`your ${whatDrink}`)
// } else if (whatDrink = theDrinks[0][3]){
//     console.log(`your ${whatDrink}`)
// } else if (whatDrink = theDrinks[0][4]){
//     console.log(`your ${whatDrink}`)
// } else if (whatDrink = theDrinks[0][5]){
//     console.log(`your ${whatDrink}`)
// } else
//     console.log("no drink orderd");
                        



// }

// drinksOrderd("Coke")


// drinksInput = theDrinks[0][2]
// switch(drinksInput){
//         case drinksInput = theDrinks[0][0]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][0]}`);
//             break;
//         case drinksInput = theDrinks[0][1]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][1]}`);
//             break;
//         case drinksInput = theDrinks[0][2]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][2]}`);
//             break;
//         case drinksInput = theDrinks[0][3]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][3]}`);
//             break;
//         case drinksInput = theDrinks[0][2]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][4]}`);
//             break;
//         case drinksInput = theDrinks[0][3]:
//             console.log(`your ${drinksInput} is £${theDrinks[1][5]}`);
//             break;
//     }
