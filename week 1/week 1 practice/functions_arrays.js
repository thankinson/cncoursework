
const addUp = (num1, num2) => {
    return num1 + num2;
}

let myNumber = addUp(3, 7) + 30;
console.log(myNumber);

console.log(addUp(3, 5));


// this fucntion tells you if something is true or false. or off and on
let coffeeIsGrinding = false;

const pressGrindBeans = () => {
    if (coffeeIsGrinding){
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}

pressGrindBeans();

// cash machine
let balance = 1000;
let amount = 100;
let accNumber = 50449921

const cashWithdrawalOne = (amount, accNumber) => {
    console.log(`Withdrawing ${amount} from account ${accNumber}`);
    remainingBallance = balance - amount;
    console.log(`your Remaiinig balance is ${remainingBallance}`)
}

cashWithdrawalOne(amount, accNumber);


const cashWithdrawalTwo = (amount, accNumber) => {
    if (amount <= balance){
        console.log(`Withdrawing ${amount} from account ${accNumber}`);
        remainingBallance = balance - amount;
        console.log(`your Remaiinig balance is ${remainingBallance}`)
    } else {
        console.log("Insuficant funds")
    }
}

// let balance = 1000;
// let amount = 100;
// let accNumber = 50449921

cashWithdrawalTwo(amount, accNumber);


//  multi functions in one
const cashMachine = () =>{
    const checkBalance = () =>{
        console.log(`Your balance is ${balance}`);
    }

    const withdrawCashThree = () =>{
        if (amount <= balance){
            console.log(`Withdrawing ${amount} from account ${accNumber}`);
            remainingBallance = balance - amount;
            console.log(`your Remaiinig balance is ${remainingBallance}`);
        } else {
            console.log("Insuficant funds");
        }
    }

    checkBalance();
    withdrawCashThree();
}

cashMachine();





