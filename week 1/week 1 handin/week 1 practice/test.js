// let space1 = "x";
// let space2 = " ";
// let space3 = "x";
// let space4 = "x";
// let space5 = " ";
// let space6 = " ";
// let space7 = "x";
// let space8 = " ";
// let space9 = " ";

// let lineGrid = [[space1, space2, space3],
//                [space4, space5, space6],
//                [space7, space8, space9]
//               ]

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

// // let toCheck;

// // for (let i = 0; i < 2; i++) {
// //     if (i == 0) {
// //         toCheck = "x";
// //     } else {
// //         toCheck = "o";
// //     }

// //     if (lineGrid[0][0] == toCheck && lineGrid[0][1] == toCheck && lineGrid[0][2] == toCheck) {
// //         console.log("You won!");
// //     } else if (lineGrid[1][0] == toCheck && lineGrid[2][1] == toCheck && lineGrid[3][2] == toCheck) {
// //         console.log("You won!");
// //     } else if (lineGrid[1][0] == toCheck && lineGrid[2][1] == toCheck && lineGrid[3][2] == toCheck) {
// //         console.log("You won!");
// //     } else if (lineGrid[3][0] == toCheck && lineGrid[3][1] == toCheck && lineGrid[3][2] == toCheck) {
// //         console.log("You won!");
// //     }
// // }
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
//         console.log("No one wins")
//     }

// const pinSet = 5516;
// let pin = 5516;
// let account = 01523281;

// const cashMachine = () =>{
//     const checkPin = () =>{
//         if (pin === pinSet && pin.length == 4){
//             console.log("Pin correct");
//             withdrawCash()
//         } else {
//             console.log("Pin Incorect");
//             checkPin()
//         }
//     }

//     const withdrawCash = () =>{

//     }
// }
// let topping1 = "mushrooms"
// const subSandwich = () =>{
//     switch (topping1){
//         case "mushrooms":
//             console.log(`i dont mind having ${topping1} on my pizza`)
//             break;
//         case "pepperoni":
//             console.log(`i dont mind having ${topping1} on my pizza`)
//             break;
//         case "onion":
//             console.log(`i dont mind having ${topping1} on my pizza`)
//             break;
//         case "ham":
//             console.log(`i dont mind having ${topping1} on my pizza`)
//             break;
//         case "chilli":
//             console.log(`i dont mind having ${topping1} on my pizza`)
//             break;
//         default:
//             console.log(`i dont like ${topping1} on my pizza`)
//     }
// }

const subOrder = (topping1, topping2, topping3, topping4, topping5) =>{
    console.log()
}


let itemsArray = [1, 2, 3]
itemsArray.splice(0, 0, 3) // insert at position 1
console.log(itemsArray)
