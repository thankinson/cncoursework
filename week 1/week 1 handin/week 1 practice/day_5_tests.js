/////////////////////// JORDONS CODE \\\\\\\\\\\\\\\\\\\\\\\\\\\
// let drinksArray = ["coke", "pepsi", "water", "sprite"];
// let drinkCost = [1, 1.5, 1, 2];
// // let multiAray = [["coke", "pepsi", "water", "sprite"], [1, 1.5, 1, 2]];
// let userBalance = 10;

// const checkDrinks = () => {
//     for (let i = 0; i < drinksArray.length; i++) {
//         console.log(drinksArray[i]);
//     }
// }

// const checkBalance = () => {
//     console.log(`The available drinks are:`);
//     for (let i = 0; i < drinksArray.length; i++) {
//         console.log(`${drinksArray[i]}: £${drinkCost[i]}`)
//     }
//     console.log(`Your available balance is: £${userBalance}`);
// }

// const checkSelection = (choice) => {
//     if (userBalance >= drinkCost[choice]) {
//         console.log(`Enjoy your ${drinksArray[choice]}, you've got good taste!`);
//     }
// }

// checkDrinks();
// checkBalance();
// checkSelection(3);
// checkSelection(2);
// checkSelection(1);
// checkSelection(0);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// check type of drink, check price of drink, check drink choses is avliable

// let drink = "Coffee"
// let drinkPrice = 3;
// let userCash = 10;
// let userChange = userCash -
// let drinkInStock = false
// const drinkType = (drink, drinkPrice, drinkInStock, userCash) =>{
//     if (drinkInStock = true){
//         console.log(`the cost of your ${drink} is ${drinkPrice}`);
        
//         console.log 
//     }


// }

// console.log("coffee", 3, true, 10)




// let drinksList = ["Pepsi", "Coke", "Coffee", "Tea", "Water"]
// let drinksPrice = [1, 1, 3, 3, 2]
// let userBalance = 10

// const drinksOrder = () => {
//     for (let i = 0; i <drinksList.length; i++)
//     console.log(drinksList[i])
// }

// const checkDrink = (drinkChoice, price) =>{
//     if (drinksList[drinkChoice] = drinksList[0]){
//         console.log(`${drinksList[drinkChosen]} is in stock and cost £${drinksPrice[price]}`)
//     } else {
//         console.log(`${drinkChosen} is not avliable`)
//     }
// }   

// const purchseDrink = () => {
//     if (drinksList = drinkChosen){
//         userChange = drinksPrice[0] - userBalance;
//         console.log(`Your change from £${10} is £${userChange}`)
//     }
// }

// console.log(drinksOrder(), checkDrink([0],[0]),purchseDrink())


let drinksList = ["Pepsi", "Coke", "Coffee", "Tea", "Water"]
let drinksPrice = [1, 1, 3, 3, 2]
let userBalance = 10


const myDrink = () => {
    const drinksOrder = () => {
        for (let i = 0; i <drinksList.length; i++)
        console.log(`${drinksList[i]} : £${drinksPrice[i]}`);
        checkDrink()
    }

    // const checkDrink = () =>{
    //     if ()
    // }


    drinksOrder();
}

console.log(myDrink())