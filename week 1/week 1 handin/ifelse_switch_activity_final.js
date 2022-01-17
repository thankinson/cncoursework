//      if/else activities      \\

//      challange 1(if/else)        \\
//  Create a variable called password.
//  Check how many letters are in the password, if there 
//  are less than 8 log to the console that the password 
//  is too short. Otherwise log the password to the 
//  console.

// variable
let password = "potatoes";
// if/else

const checkPassword = () =>{
    if (password.length < 8){ // checks password legth 
        console.log("Yopur password is to short"); // iff to short tells you it is
    } else {
        console.log(`Your password is correct length. password is "${password}"`); // iff long enough tells you its correct and rpints it to terminal
            
        };
    };

checkPassword()

// switch
const checkPasswordSwitch = () =>{
    switch(true){
        case password.length < 8:
            console.log("Your password is to short");
            break;
        default:
            console.log(`Your password is correct length. password is "${password}"`);
    };
};

checkPasswordSwitch()

//      challange 2     \\

// Challenge 2(use both if/else and switch):
// Create a variable called num.
// Check if the variable is divisible by 3 or 5. If it is log 
// “This number is divisible by 3 or 5” to the console. 
// Otherwise log “This number is not divisible by 3 or 5”.


// if else version
const checkIfDivisable = (num) =>{
    if (num % 3 == 0 || num % 5 == 0){ // checks if number is divadable by 3 or 5
        console.log("This number is divisible by 3 or 5"); // tells you if it is
    } else {
        console.log("This number is not divisible by 3 or 5"); // tells if not
    };
};

checkIfDivisable(15);

// switch version 
const checkSwitchDivisable = (num) =>{
    switch (true){
        case num % 3 == 0:  // checks if number is divadable by 3 or 5
            console.log("This number is divisible by 3 or 5");
            break;
        case num % 5 == 0:  // checks if number is divadable by 3 or 5
            console.log("This number is divisible by 3 or 5");
            break
        default:
            console.log("This number is not divisible by 3 or 5");
    };
};

checkSwitchDivisable(20)

//      Challange 3     \\

// Challenge 3:
// Create a variable called num.
// If num is divisible by 3 log “fizz” to the console, if it’s 
// divisible by 5 log “buzz” to the console, if it’s divisible 
// by both 3 and 5 log “fizz buzz” to the console. 
// Otherwise log num to the console.

// challange 3 if else
const fizzBuzzIf = (num) =>{ 
    if (num % 3 == 0 && num % 5 == 0){ // checks if num is divadable by 3 and 5 and if it is prints out fizzbuzz
        console.log('fizzbuzz')
    } else if (num % 3 == 0){ // checks if dividable by 3 if is prints fizz
        console.log("fizz")
    } else if (num % 5 == 0){ // checks if dividable by 3 if is prints buz
        console.log("buzz")
    } else { // else prints num
        console.log(num)
    };
};

fizzBuzzIf(2);
fizzBuzzIf(15);
fizzBuzzIf(9);
fizzBuzzIf(5);

// challange 3 switch. this one dose not want to work i belive the logic for this switch version cannot be applied in teh way i am trying to

// const fizzBuzzSwitch = (num) =>{
//     switch (true){
//     case num % 3 == 0 && num % 5 == 0:
//         console.log('fizzbuzz');
//         break;
//     case num % 3 == 0:
//         console.log("fizz");
//         break;
//     case num % 5 == 0:
//         console.group("buzz");
//         break;
//     default:
//         console.log(num);
        
//     };
// };

// fizzBuzzSwitch(20);



//      challange 4     \\

//// challange 4 palindrome

// Challenge 4:
// Create a variable called num.
// Check if the number is a palindrome (looks the same 
// forward as it does backwards e.g. 1001 or 20202).

// challange 4 if

const ispalindromeIf = (num) =>{
    let numToStr = num.toString(); // converts num to string
    let numRev = numToStr.split('').reverse().join(''); // reverses string
    if (numToStr == numRev){ // checks if the stiring is aplindroms and tells you if the num is 
        console.log(`${num} Is palindrome`);
    } else {
        console.log(`${num} Is not palindrome`); // tells you if it is not
    
    };
};

ispalindromeIf(2002); // yes
ispalindromeIf(20102); // yes
ispalindromeIf(33515); // no

// challanghe 4 switch
// switch version of if. works smae way
const ispalindromeSwitch = (num) =>{
    let numToStr = num.toString();
    let numRev = numToStr.split('').reverse().join('');
    switch (true){
        case numToStr == numRev:
            console.log(`${num} Is palindrome`);
            break;
        default:
            console.log(`${num} Is not palindrome`);
    };
};

ispalindromeSwitch(1001); 
ispalindromeSwitch(10201);
ispalindromeSwitch(10021);



//      Challange 5         \\
// Challenge 5:
// Create a variable called time, a variable called 
// placeOfWork and a variable called townOfHome.
// Create an if statement that logs to the console 
// where someone is at times of the day. E.g. if the time 
// is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

const placeOfWorkIf = (time) =>{
    let location = ['home', 'commuting', 'work']
    if (time >= 800 && time < 900 || time >=1700 && time < 1800){ // checks to see if your traveling to work
        console.log(`The time is ${time} and i am  ${location[1]}`);

    } else if (time <= 700 || time >= 1800){ // checks if your home
        console.log(`The time is ${time} and i am  ${location[0]}`);
    } else {
        console.log(`The time is ${time} and i am  ${location[2]}`); // else your at work earning someone millions whil you drive around in a 2004 ford fiesta
    }

    
}
// i was aiming to use Militery time but it didnt like 0700 and kept returning 448 instead of 0700
// for 0100 to 0900 inter, for 1am - 100, 2am - 200, 3am - 300, 4am - 400, 5am - 500, 6am - 600, 7am - 700, 8am - 800, 9am, 900, 10am - 1000, 11am - 1100, 12pm - 1200. any number after 1000 wll throw back a responce so if you enter 10000000000 it would say your at home

placeOfWorkIf(700)
placeOfWorkIf(850)
placeOfWorkIf(1200)
placeOfWorkIf(1730)
placeOfWorkIf(1800)
// console.log(0700) // displays the unfortune number of 448 further invstigation needed for use in future

//      challange 6      \

// Challenge 6:
// Take the string 
// “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”.
// Find the index of a last vowel in the string.

const findLastVowel = (string) =>{
    var x = string.toLowerCase(); // converts the string to lower case
    var theLastVowel = Math.max(x.lastIndexOf("a"), x.lastIndexOf("e"), x.lastIndexOf("i"), x.lastIndexOf("o"), x.lastIndexOf("u")); // this is looking for the last index of a e i o u (also know as vowels)
    console.log(theLastVowel) // tells you the fowels position
    return x.charAt(theLastVowel); // returns what the last vowel is
    
}
// the last vowel gave me headaches
console.log(findLastVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"));
console.log(findLastVowel("if you keep looking at code you will go blind"));
console.log(findLastVowel("Stargate > Star Wars && Star Trek"));


//      Challange 7       \\

// Challenge 7:
// Create a variable called word that takes a string.
// Create an if statement that checks if the last letter is 
// the same as the first. If it is return true, otherwise 
// return false.

// ch7 as if

const matchLettersIf = (word) => {
    let wordRev = word.split('').reverse().join(''); // reverse string 
    if (word[0] == wordRev[0]){ // checks if the first and last letters match and if they do prints it
        console.log(`${word}: first and last letters match`);
    } else {
        console.log(`${word}: first and last letters do not match`); // ellse tells you there not
    }
}

matchLettersIf("eagale");
matchLettersIf("bird")
// ch7 as switch
// performs the same tasks as the iff statement
const matchLetterSwitch = (word) => {
    let wordRev = word.split('').reverse().join('');
    switch (true){
        case word[0] == wordRev[0]: // checks if the first and last letters match and if they do prints it
        console.log(`${word}: first and last letters match`);
        break;
    default:
        console.log(`${word}: first and last letters do not match`); // ellse tells you there not
    };
};

matchLetterSwitch("trout")
matchLetterSwitch("fish")


//      challange 8         \\

// Challenge 8:
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the 
// sum is even. If it is return the number, otherwise return 
// the numbers multiplied together.

const evensIf = (num1, num2) => { 
    let sum = num1 + num2 // adds num1 and num2 together
    if (sum % 2 == 0){ // checks if it can be divide evenly and if so its printed in terminal
        console.log(sum);
    } else {
        console.log(num1 * num2) // if it cant its multiplied and printed in terminal
    }
}
evensIf(2, 2) // var goes in here

// ch8 as switch

const evensSwitch = (num1, num2) => { 
    let sum = num1 + num2 // adds num1 and num2 together
    switch (true){
        case sum % 2 == 0: // checks if it can be divide evenly and if so its printed in terminal
            console.log(sum);
            break
        default:
            console.log(num1 * num2); // if it cant its multiplied and printed in terminal
    
    }
    
}
evensSwitch(7, 2) // var goes in here

