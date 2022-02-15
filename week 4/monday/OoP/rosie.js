// let rosie = {
//     _name: "Rosie",
//     _thirst: 50,
//     _isWiggling: false,
//     _isHopping: false,
//     get name(){
//         return this._name
//     },
//     get drink(){
//         this._thirst -= 10;
//         return this._thirst;
//     }
// };

// console.log(rosie.name);
// console.log(rosie.drink);


class Bunny{
    constructor(name){
        this.name = name;
        this._hops = 0;
    }
    get name(){
        return this/_name;
    }
    get hops(){
        return this._hops;
    }
    increaseHops(){
        this._hops++;
    }
}

const bob = new Bunny("bob");

console.log(bob.name)