const bob = new Cat("BoB");

const steve = new Cat("steve")

class cyberPet{
    constructor(petName){
        this._petName = petName;
        this._petHunger = 50;
        this._petThirst = 50;
        this._petPlay = 50;
    };
        get petName(){
            return this._petName;
        };
        get petType(){
            return this._petType;
        };
        get petHunger(){
            return this._petHunger;
        };
        get petThirst(){
            return this._petThirst;
        };
        get petPlay(){
            return this._petPlay;
        };
            petPlay(){
                play++;
                thirst -= 5;
                hunger -= 5;
            };
            petHunger(){
                hunger++;
                thirst -= 5;
                play -= 2;
            };
            petThirst(){
                thirst++;
                hunger -= 2;
                play -= 1;
            };
    }


    class Cat extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Cat";
        };
    };

    class Dog extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Dog";
        };
    };

    class Fish extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Fish";
        };
    };

    class Alien extends cyberPet{
        constructor(petName){
            super(petName);
            this._petType = "Alien";
        };
    };



console.log(bob, steve);



petPlay.addEventListener(`click`, () =>{
     
    console.log(nameOfPet.getHunger);
    if (nameOfPet.getHunger < 1 || nameOfPet.getThirst < 1){
            alert(`${nameOfPet.getName} your pet has died`);
            location.reload();
    } else if (nameOfPet.getPlay >= 60){
        console.log(`${nameOfPet.getName} is tired`);
        alert(`${nameOfPet.getName} is extreamly tired and wants to rest`)
    } else {
        console.log(`${nameOfPet.getName}`);
        console.log(nameOfPet);
        nameOfPet.playPet();
        stats();
    }
    

});





// #################################\\
//              test site           \\
// #################################\\

// let hunger = 50;
// let play = 50;
// let thirst = 50;
// let petName = "Bob";
// const petPlay = () => {
//     play++;
//     thirst -= 5;
//     hunger -= 5;
// };
// const petHunger = () => {
//     hunger++;
//     thirst -= 5;
//     play -= 2;
// };
// const petThirst = () => {
//     thirst++;
//     hunger -= 1;
//     play -= 1;
// };


// const thePet = () => {
//     if (hunger <= 50){
//     console.log (`${petName} is hungry`);
//     } else if (thirst <= 50){
//         console.log(`${petName} is thirsty`);
//     } else if (play <= 50){
//         console.log(`${petName} wants to play`);
//     } else {
//         console.log(`${petName} is fine`);
//     }
// }

//     const feedPet = () => {
//         for (i = 0; i <= hunger; i++){
//             petHunger();
//         } if (thirst || play == 50){
//             console.log(`${petName} os no longer hungry`);
//         }
//     }


// thePet()

// #################################\\
// #################################\\
// #################################\\

// #################################\\
//        the chopping block        \\
// #################################\\



// #################################\\
// #################################\\
// #################################\\
