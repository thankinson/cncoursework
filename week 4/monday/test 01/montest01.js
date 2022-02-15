let name = "tom"
let number = 1234
let isTrue = false

let myArray = ["film 1", "film 2", "film 3", "film 4"]

console.log(myArray)

myArray.push("film 5")

console.log(myArray)

for (i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}


let balance = 1000
const cashMachine = (ammount) => {
    if (ammount <= balance){
       let remaining = balance - ammount;   
       console.log(`your remaing balance isn ${remaining}`);

   } else {
       console.log("You have issufiant funds");
   }

}

cashMachine(1500)