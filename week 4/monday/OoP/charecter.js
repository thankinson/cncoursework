// class Charecter{
//     constructor(charName, charAge, charClass, charDeff, charAttack){
//         this._charName = charName;
//         this._charAge = charAge;
//         this._charClass = charClass;
//         this._charDeff = charDeff;
//         this._charAttack = charAttack;
//     }
// }


// // const bob = new Bunny("bob");
// const bob = new Charecter("Bob", 21, "Warrior", 100, 20)


// console.log(bob)

class Enemy{
    constructor(name, health){
        this._name = name;
        this._health = health;
        this._weapon = ["sword", "bow"];
    }
    get name(){
        return this._name;
    }
    get health(){
        return this._health;
    }
    get weapon(){
        return this._weapon;
    }
    reduceHealth(amount){
        return this.health -= amount;
    }
}


const enamy1 = new Enemy("bob", 1000)

console.log(enamy1)