let space1 = "x";
let space2 = " ";
let space3 = "x";
let space4 = " ";
let space5 = "o";
let space6 = " ";
let space7 = "x";
let space8 = " ";
let space9 = "o";

console.log("   |   |   ");
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |   ");
console.log("-----------");
console.log("   |   |   ");
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |   ");

switch (true){
    case space1 == space2 && space1 == space3 && space2 == space3:
        console.log("you win")
        break;
    case space1 == space5 && space1 == space9 && space5 == space9:
        console.log("you win")
        break;
    case space1 == space4 && space4 == space7 && space1 == space7:
        console.log("you win")
        break;
    case space2 == space5 && space2 == space8 && space5 == space8:
        console.log("you win")
        break;
    case space3 == space6 && space3 == space9 && space6 == space9:
        console.log("you win")
        break;
    case space3 == space5 && space3 == space7 && space5 == space7:
        console.log("you win")
        break;
    default:
        console.log("No one wins")
        
}