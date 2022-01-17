// funtions
// activity 1

const coffeeOrder = (size, drinkType) =>{
    console.log(`Your ${size} ${drinkType} are ready`);
}

coffeeOrder("Large", "Milkshake");

// activity 2

const factorial = (n) =>{
    if ((n === 0) || (n === 1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(30));

/// arrays

/// activity 1

let website = [
    "www.game.co.uk",
    "www.amazon.co.uk",
    "www.argos.co.uk"
]
console.log(website);
website.push("www.ebay.co.uk", "www.ebuyer.co.uk");
console.log(website);
website.pop();
console.log(website);

/// activity 2

const listOne = [
    "tv",
    "games",
    "film",
    "guitar",
    "drive"
];

console.log(listOne);
// .slice
console.log(listOne.slice(3,4)); // this slices and dose something i dont undertsand. dose not change orginal array

// .length
console.log(listOne.length); // this returns the length of the array. in this instance its 5


// .splice
const listTwo = [
    "tv",
    "games",
    "film",
    "guitar",
    "drive"
];
console.log(listTwo)
listTwo.splice(1, 0, 'music') // insert at position 1
console.log(listTwo);

listTwo.splice(4, 1, 'lego') // replaces element at postion 4
console.log(listTwo);


// map

const numbers = [1, 2, 3, 4, 5];

const map1 = numbers.map(x => x * 9); // multiplys the array items by 9 and creates a new array. results 9, 18, 27, 36, 45

console.log(map1);

// .shift
const numbersShift = numbers.shift(); // .shift removes teh first element from teh array

console.log(numbers); // array result 2,3, 4, 5

console.log(numbersShift) // shows what was removed. result 1

// .unshift

console.log(numbers.unshift(6, 7)); // unshift adds one or more elementsto the array at the beginning of the array

console.log(numbers)

// extra stuff

// .flat


// const listFlat = [0, 1, 2, [3, 4]];

// console.log(listFlat.flat()); // this creates a new array by merging with subarray 


const listFlat = [0, 1, 2, [3, 4,[5, 6]]];
console.log(listFlat);
console.log(listFlat.flat(1)); // by defining how many sub-arrays you want to merge into the main one input a bumber in (1). this merges 3, 4 into main array

// .includes

const listIncludes = [0, 1, 2, 3, 4, 5];
console.log(listIncludes.includes(2)); // .includes is checkingto see if something is in the array and returs a true or false answer. in this case 2 is in the list

console.log(listIncludes.includes(7)); // 7 isnt in the list so the return will be false

// .at
const listAt = [0, 1, 2, 3, 4, 5];

let index = 2; // indes postion var

console.log(`index is ${index} and returns item ${listAt.at(index)}`); // this returns item at position defined in the index var. in this case postion 2 which returns 2 from the arry

let indexRevers = -1
console.log(listAt.at(indexRevers)); // returns item from the end of the index in last postion

// .concat

const concatOne = ['a', 'b', 'c'];
const concatTwo = ['d', 'e', 'f'];

const concatThree = concatOne.concat(concatTwo); // this merges 2 seperate arrays into one

console.log(concatThree); // reslut of the merge printed to terminal

// .reverse

const listReveres = [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(`Array normal: ${listReveres}`);

const reverseList = listReveres.reverse();
console.log(`reversed: ${reverseList}`)

// .toString

const listToString = [0, 1, 2, 3, 4, 5];

console.log(listToString.toString()); // converts integer to string

// .isArray


/// this section code will check to see of what is an array and returns tru or false response
const listIsArrayOne = [0, 1, 2, 3, 4, 5];

const listIsArrayThree = "[0, 1, 2, 3, 4, 5]";
const listIsArrayFour = ['fish', 'chips'];

console.log(Array.isArray(listIsArrayOne));
console.log(Array.isArray(0, 1, 2, 3, 4, 5));
console.log(Array.isArray(listIsArrayThree));
console.log(Array.isArray(listIsArrayFour));