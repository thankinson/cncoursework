// let offer ="none";
// let time = 1200;

// const cofe = {
//     name: "whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Pepsi",
//         "Coke",
//         "Lemonade",
//         "Tea",
//         "Hot Chocolate"
//     ],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with your lunch",
//     noOffer: "No offer sorry"
// }

// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1400) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// } else {
//     cafe.noOffer;
//     console.log(cafe.noOffer);
// }


// const person = {
//     firstName: "Tom",
//     LastName: "Hankinson",
//     dOb: [27, 12, 1985],
//     age: 36,
//     lokks: {
//         eyeColour: "Blue",
//         hairColour: "Brown"
//     }
// };

// console.log(person.firstName, LastName)

// let day = "Saturday";
// let alarm = "";
// const alarmActivity = {
//     weekendAlarm: "No alarm",
//     weekdayAlarm: "Get up at 7 am"
// }

// if (day === "Saturday" || "Sunday"){
//     alarm = alarmActivity.weekdayAlarm;
 
// } else {
//     alarm = alarmActivity.weekdayAlarm;
    
// }
// needs validation check for weekdays

// console.log(alarm);

const person = {
    firstName: "Tom",
    lastName: "Hankinson",
    dOb: [27, 12, 1985],
    age: 36,
    lokks: {
        eyeColour: "Blue",
        hairColour: "Brown"
    },
    myFunc: () => {
        return 1 + 1;
    }
};

console.log(person.myFunc());

// person.gender = "male";

// console.log(person);

//      activity 1      \\

// Create an object called pet with key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return 
// a string saying [Your pet name] is eating/drinking.

const pet = {
    name: "max",
    typeOfPet: "dog",
    age: "4",
    colour: "brown",
    eat: (eating) =>{
        console.log(`${pet.name} is eating ${eating}`);
    },
    drink: (drinking) =>{
        console.log(`${pet.name} is drinking ${drinking}`);
    }
}

pet.eat("dog food");
pet.drink("water");

const petFunction = {
    name: "Max",
    typeOfPet: "Dog",
    age: "4",
    colour: "brown",
    eat: function(eating) {
        console.log(`${pet.name} is eating ${eating}`);
    },
    drink: function(drinking) {
        console.log(`${pet.name} is drinking ${drinking}`);
    }
}

petFunction.eat("slipper");
petFunction.drink("from the toilet");