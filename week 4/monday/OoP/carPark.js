class Car{
    constructor (regNum, arrival){
        this._regNum = regNum;
        this._arrival = arrival;
        this._cost = 2;
        this._hasPaid = false;
    }
    get hasPaid(){
        return this._hasPaid;
    }
    departureTime(departure){
        this._departureTime = departure;
    }
    costHours(){
        return (this._departureTime - this._arrival) * this._cost;
    }
    makePayment(amountPaid){
        if (amountPaid >= this.costHours()){
            this._hasPaid = true;
           return `You paid correct amount`
        } else {
            return `Not emough money`;
        }
    }
}
class Staff extends Car{
    constructor(regNum, arrival, staffNum){
        super(regNum, arrival)
        this._staffNum = staffNum;
        this._staffArray = [1234, 5678, 9101]
        this._isStaffNum = false;
        // this._arrival = arrival;
    }
    get staffNumber(){
        return this._staffNum
    }
    get isStaffNum(){
        return this._isStaffNum
    }
    staffDiscount(){
        return (this._departureTime - this._arrival) * (this._cost /= 4)
    }
    checkStaff(){
        for (let i = 0; i < this._staffArray.length; i++){
            if (this._staffNum === this._staffArray[i]){
                this._isStaffNum = true;
                break;
            } 
            }
            if (this._isStaffNum){
               
                return `${this._staffNum} is a staff member and parking for today is £${this.staffDiscount()}`;
                
            } else {
                return `Thank you customer your price of parking is £${this.costHours()}`;

            }
    }
}
const staff1 = new Staff("sn110dr", 2, 1234)
staff1.departureTime(7)
console.log(staff1.checkStaff())

// const arrival = (classType, carReg, arrivalTime, staffNum) =>{
//     const classType = new Staff(carReg, arrivalTime, staffNum)
// }



















// -------------------------------------------------- \\
//                  do not delete                     \\




// let stafNum = 5678
// isStafNum = false;
// staffArray = [1234, 5678, 9101]
// for (i = 0; i < staffArray.length; i++){
//     if (stafNum === staffArray[i]){
//         isStafNum = true
//         break;
//     } 
//     }
//     if (isStafNum){
//         console.log(`staff number ${stafNum}`);
//     } else {
//         console.log(`not staff num ${stafNum}`)
//     }
// -------------------------------------------------- \\




//##############################################\\
//               the chopping block             \\
//##############################################\\

// class Staff extends Car{
//     constructor(regNum, staffNum){
//         super(regNum)
//         this._staffNum = staffNum;
//         this._staffArray = [1234, 5678, 9101]
//         this._staffCredits = 10;
//         this._isStaffNum = false;
//     }
//     get staffNumber(){
//         return this._staffNum
//     }
//     get isStaffNum(){
//         return this.isStaffNum
//     }
//     get remainingCredits(){
//         this._remainingCredits = remainingCredits
//     }
//     checkStaff(){
//         for (i = 0; i < this._staffArray.length; i++){
//             if (this._staffNum === staffArray[i]){
//                 this._isStaffNum = true;
//                 break;
//             } 
//             }
//             if (this._isStaffNum){
//                 return `${this._staffNum} is a staff member`;
//             } else {
//                 return `${this._staffNum} is not a staff member`;
//             }
//     }
// }



// class Car{
//     constructor (regNum, arrival, cost){
//         this._regNum = regNum;
//         this._arrival = arrival;
//         this._cost = cost;
//         this_hasPaid = false;
//     }
//     get regNum(){
//         return this._regNum;
//     }
//     get hours(){
//         return this._hours;
//     }
//     get cost(){
//         return this._cost;
//     }
//     costHours(){
//         this._hours++;
//         this._cost += 1;
//     }
// }


// const parkCharge = (carReg, hoursParked) => {
//     const car = new Car(carReg);
//     for (i = 0; i < hoursParked; i++){
//         car.costHours();
//     }
//     return(`You stayed for ${car.hours} and the cost is £${car.cost}`);
// }

// parkCharge("", 6 );

// class Staff extends Cars{
//     constructor(staffNum, credits){
//         super(regNum, arrival, cost);
//         this._staffNum = staffNum;
//         this._credits = credits;
//     }
// }




// const car1 = new Car("", 2, 1 )
// car1.departureTime(10);
// console.log(car1.costHours())
// console.log(car1.makePayment(6))

//##############################################\\