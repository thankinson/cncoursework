// let
// const
//// activity 1 ////
let myName = "Tom";
let myAge = 36;
let favDrink = "Diet Pepsi";

console.log(`My name is ${myName}, I am ${myAge} and my favourite drink is ${favDrink}.`);

//// activity 2 ////

let breakFast = "toast";
let lunCh = "bacon roll";
let dinNer = "pizza";

console.log(`For breakfast today i will have ${breakFast}, for lunch it is ${lunCh} and for dinner i will have ${dinNer}.`);

breakFast = "toast";
lunCh = "soup";
dinNer = "sausage and chips";

console.log(`For breakfast today i will have ${breakFast}, for lunch it is ${lunCh} and for dinner i will have ${dinNer}.`);

let days = 24*60*60*1000;
let today = new Date();
let bDay = new Date(2022, 11, 27);

let daysTo = Math.round(Math.abs(today.getTime() - bDay.getTime())/(days));

console.log(`${daysTo} days until biorthday.`);

//// days since birth
let oneDay = 24*60*60*1000; 
let birthDate = new Date(1985,12,27);
let todayDate = new Date();

let diffDays = Math.round(Math.abs((birthDate.getTime() - todayDate.getTime())/(oneDay)));

console.log(`${diffDays} days since birth.`);


//// activity 4 ////

let space1 = "x";
let space2 = "x";
let space3 = "o";
let space4 = "x";
let space5 = "o";
let space6 = "x";
let space7 = "o";
let space8 = "o";
let space9 = "x";



console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");


//// switch task during zoom chat

const grade = 1;

switch (true){
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}

if (grade >= 70){
    console.log("Distinction");
} else if(grade >= 60){
    console.log("Merit");
} else if(grade >= 50){
    console.log("Pass");
} else{
    console.log("Failed");
}


// iff statments activity

let ifAge = 18;
let country = "UK";

if (ifAge >= 18){
    console.log("Yes i can serve you you are");
} else {
    console.log("You are not old enough");
}


if (myAge >= 18 && country === "UK"){
    console.log("Yes i can serve you you are")
} else {
    console.log("You are not old enough")
}

//// switch pizza toppings activity

let topping1 = "mushrooms"

switch (topping1){
    case "mushrooms":
        console.log(`i dont mind having ${topping1} on my pizza`)
        break;
    case "pepperoni":
        console.log(`i dont mind having ${topping1} on my pizza`)
        break;
    case "onion":
        console.log(`i dont mind having ${topping1} on my pizza`)
        break;
    default:
        console.log(`i dont like ${topping1} on my pizza`)
}

//// challange 1

let passWord = "mushroom";

if (passWord.length >= 8){
    console.log("password is correct");
} else {
    console.log("password is to short");
}

//// challange 2

let num = 15;

if (num % 3 == 0 || num % 5 == 0){
    console.log("This number is divisible by 3 or 5");
} else {
    console.log("This number is not divisible by 3 or 5");
}

switch (true){
    case num % 3 == 0:
        console.log("This number is divisible by 3 or 5");
        break;
    case num % 5 == 0:
        console.log("This number is divisible by 3 or 5");
        break
    default:
        console.log("This number is not divisible by 3 or 5");
}

//// challange 3

let num3 = 25;

switch (true){
    case  num3 % 5 == 0 && num3 % 3 == 0:
        console.log("fizz buzz");
        break;
    case num3 % 5 == 0:
        console.log("buzz");
        break;
    case num3 % 3 == 0:
        console.log("fizz");
        break;
    default:
        console.log(num3);
}

//// challange 4 palindrome

let num4 = 1001;
let num4str = num4.toString();
let numRev = num4str.split('').reverse().join('');

switch (true){
    case num4str == numRev:
        console.log("is palindrome");
        break;
    default:
        console.log("Is not palindrome")
}




///// challange 5

let time = 1;
let placeOfWork = "work"
let townOfHome = "home"

if (time == 8){
    console.log(`Time is ${time} and i am commutubf to ${placeOfWork}`);
} else if (time == 9){
    console.log(`Time is ${time} and i am at ${placeOfWork}`);
} else {
    console.log(`Time is ${time} and i am at ${townOfHome}`);
}

//// challange 6 


// let longString = ["jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"];
// let lastVowel = longString.lastIndexOf(["a", "e", "i", "o", "u"]);
// console.log(lastVowel)

// const lastVowel = s => s.replace(/[^aeiou]*$/i, "").length - 1;

// ["jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"].forEach(e => console.log(`"${e}" => ${lastVowel(e)}`));


let vowels = ['a', 'e', 'i', 'o', 'u']
console.log("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi".lastIndexOf())


//// challange 7

let word = "eagle"
let wordRev = word.split('').reverse().join('');

console.log(word);
console.log(wordRev);

// ch7 as if
if (word[0] == wordRev[0]){
    console.log("first and last match");
} else {
    console.log("They dont match");
}

// ch7 as switch

switch (true){
    case word[0] == wordRev[0]:
    console.log("first and last match");
    break;
default:
    console.log("They dont match");
}


//// challange 8

let num1 = 9;
let num2 = 3;
let sum = num1 + num2;

// ch8 as if

if (sum % 2 == 0){
    console.log(sum);
} else {
    console.log(num1 * num2)
}

// ch8 as switch

switch (true){
    case sum % 2 == 0:
        console.log(sum);
        break
    default:
        console.log(num1 * num2);

}