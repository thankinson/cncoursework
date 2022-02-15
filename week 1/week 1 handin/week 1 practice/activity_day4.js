// array activity
// activity 1

// Create an array that lists your favourite films, 
// up to 5 elements
// Add 2 more using a method
// Use a loop to cycle through the array 

let favfilms = ["Stargate", "Thor Ragnorok", "Star Trek 6", "The Last Starfighter", "Dog Sodiers"];

favfilms.splice(1, 0, 'Pacific Rim'); // insert at position 1
favfilms.splice(1, 0, "ghostbuster 1984");

console.log(favfilms);

for (let i = 0; i < favfilms.length; i++){
    console.log(favfilms[i]);
}


// activity 2
for (let i = 0; i < 6; i++){
    console.log(Math.ceil(Math.random() * 49 + 1));
}

// Activity 3

for (let i = 9; i > -1; i--){
    console.log(i);
}

let multiplesOne = [];
for (let i = 0; i <= 9; i++){
    if (i % 1 == 0){
        multiplesOne.push(i);
    }
}

console.log(multiplesOne.reverse());

// for (let i = 0; i <= 9; i++){
//     if (i % 1 == 0){
//         multiplesOne.push(i);
//     }
// }

// console.log(multiplesOne)

// activity 4
let fourfilms = ["Stargate", "Thor Ragnorok", "Star Trek 6", "The Last Starfighter"];
console.log(fourfilms[2])

for (let i = 0; i < fourfilms.length; i++){
    console.log(fourfilms[i]);
}
const filmCheck = () => {
    if (fourfilms[2] == "Ghostbusters"){
    console.log("Yey it's Ghostbusters")
    } else {
        console.log("Boo, We want Ghostbusters")
    }
}

filmCheck();



// activity 5

// for (let i = 0; i < 6; i++){
//     let ranNum = Math.ceil(Math.random() * 30);
//     console.log(ranNum);

//     if (ranNum % 7 == 0){
//         console.log(`${ranNum} is dividable by 7`)
//     } else {
//         console.log(`${ranNum} not dividable by 7`)
//     }
// }

const divideBySeven = () =>{
    for (let i = 0; i < 6; i++){
        let ranNum = Math.ceil(Math.random() * 30);
        console.log(ranNum);
    
        if (ranNum % 7 == 0){
            console.log(`${ranNum} is dividable by 7`)
        } else {
            console.log(`${ranNum} not dividable by 7`)
        }
    }
}

divideBySeven()


// activity 6
let x = 10
do {

    console.log("Tom");
    x--;
}while(x > 0);

let y = 0
do{
    console.log("y = " +y);
    y++;
}while(y < 5);

let i = 0;

while(i < 5){
    i++;
    if (i == 3) continue; // skips 3
    console.log("i = " +i);
}

// while(i < 5){
//     i++;
//     if (i == 3) break;
//     console.log("i = " +i);
// }


 //     activity 7      \\
//                       \\
// let prime = true;
// const isPrime = () =>{
//     for (let i = 1; i <=20 +1; i++){
//         console.log(i);
//         if (i === 1){
//             console.log("Is not prime or composite")
//         } else if (i > 1){
//             if (2 % i == 0){}
//                 prime = false;
              
//         }
//     }   if (prime){
//         console.log(`${i} is prime`)
//     } else {
//         console.log(`${i} is not prime`)
//     }
// }

// isPrime()
// const primeNum = () =>{
//     if (primeCheck === 1){
//         console.log("Is not prime or composite")
//     } else if (primeCheck > 1){
//         for (let i = 0; i <= primeCheck; i++){
//             if (primeCheck % i == 0){
//                 isPrime == false
//             } 

//         }

//     } else {
//         if (isPrime) {
//             console.log(`${primeCheck} is prime`);
//         } else {
//             console.log(`${primeCheck} is not prime`)
//         }
//     }

// }

// primeNum()



// let num = 5;

// const isPrime = (num) => {
//     for(let i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }

// let primeNum = 20;
// for (let i = 0; i < primeNum; i++){
//     console.log(i);
//     console.log(isPrime(i));
// }

const isPrime = (num) => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
    
  }

let primeNum = 20;
for (let i = 0; i <= primeNum; i++){
    console.log(`${i} is ${isPrime(i)}`);
}

// const isPrime = (num) =>{
//     for(let i = 2; i <= num; i++){
//         if (num % i === 0){
//             console.log(`${num} is not prime`)
//             return false;
//         } else {
//             console.log(`${num} is prime`)
//             return true;
//         } 
//     }

// }

// let primeNum = 20;
// // let numPrime = 0;
// for (let i = 0; i <= primeNum; i++){
//     console.log(isPrime(i));
// }