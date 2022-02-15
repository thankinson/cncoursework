


// let gameXo = [
//     [ "x", "x", " "],
//     [ "o", " ", " "],
//     [ "o", "o", "o"]
// ];

let gameXo = {
    1: 'x',
    2: 'x',
    3: 'x',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' ',
};

let mark = 'x' || 'y';

let theGrid = `   
   |   |
 ${gameXo[1]} | ${gameXo[2]} | ${gameXo[3]}
   |   |
------------
   |   |
 ${gameXo[4]} | ${gameXo[5]} | ${gameXo[6]} 
   |   |
------------
   |   |
 ${gameXo[7]} | ${gameXo[8]} | ${gameXo[9]}
   |   |`;

console.log(theGrid)
console.log(winConditions.length)

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];





   const checkResult = () => {
    console.log(theGrid);
    let i = "x" || "o";
    switch (true){
        case (gameXo[0][0] && gameXo[0][1] === gameXo[0][2] == i): // h line 1
            console.log(`${i} WINS`);
            break;
        case (gameXo[1][0] && gameXo[1][1] && gameXo[1][2] == i): // h line 2
            console.log(`${i} WINS`);
            break;
        case (gameXo[2][0] && gameXo[2][1] === gameXo[2][2] == i): // h line 3
            console.log(`${i} WINS`);
            break;
        case (gameXo[0][0] && gameXo[1][0] && gameXo[2][0] == i): // v line 1
            console.log(`${i} WINS`);
            break;
        case (gameXo[0][1] && gameXo[1][1] && gameXo[2][1] == i): // v line 2
            console.log(`${i} WINS`);
            break;
        case (gameXo[0][2] && gameXo[1][2] && gameXo[2][2] == i): // v line 3
            console.log(`${i} WINS`);
            break;
        case (gameXo[0][0] && gameXo[1][1] && gameXo[2][2] == i): // d line 1
            console.log(`${i} WINS`);
            break;
        case (gameXo[2][0] && gameXo[1][1] && gameXo[0][3] == i): // d line 2
            console.log(`${i} WINS`);
            break;
        default:
            console.log("No winner")
    }
};

checkResult();


// const checkResult = () => {
//     console.log(theGrid);
//     let i = "x" || "o";
//     switch (true){
//         case gameXo[0][0] && gameXo[0][1] && gameXo[0][2] == i: // h line 1
//             console.log(`${i} WINS`);
//             break;
//         case gameXo[1][0] && gameXo[1][1] && gameXo[1][2] == i: // h line 2
//             console.log(`${i} WINS`);
//             break;
//         case gameXo[2][0] && gameXo[2][1] && gameXo[2][2] == i: // h line 3
//             console.log(`${i} WINS`);
//             break;
//         case gameXo[0][0] && gameXo[1][0] && gameXo[2][0] == i: // v line 1
//             console.log(`${i} WINS`);
//             break;
//         case gameXo[0][1] && gameXo[1][1] && gameXo[2][1] == i: // v line 2
//             console.log(`${i} WINS`);
//             break;
//         case gameXo[0][2] && gameXo[1][2] && gameXo[2][2] == i: // v line 3
//             console.log(`${i} WINS`);
//             break;
//         case gameXo[0][0] && gameXo[1][1] && gameXo[2][2] == i: // d line 1
//             console.log(`${i} WINS`);
//             break;
//         case gameXo[2][0] && gameXo[1][1] && gameXo[0][3] == i: // d line 2
//             console.log(`${i} WINS`);
//             break;
//         default:
//             console.log("No winner")
//     }
// };

// checkResult();


// const checkResult = () =>{
//     console.log(theGrid);
//     switch (true){
//         case gameXo[0][0] == gameXo[0][1] && gameXo[0][0] == gameXo[0][2] && gameXo[0][1] == gameXo[0][2]:
//             console.log("you win")
//             break;
//         case gameXo[0][1] == gameXo[1][1] && gameXo[0][1] == gameXo[2][2] && gameXo[1][1] == gameXo[2][2]:
//             console.log("you win")
//             break;
//         case gameXo[0][1] == gameXo[1][0] && gameXo[1][0] == gameXo[2][0] && gameXo[0][0] == gameXo[2][0]:
//             console.log("you win")
//             break;
//         case gameXo[0][1] == gameXo[1][1] && gameXo[0][1] == gameXo[2][1] && sgameXo[1][1] == gameXo[2][1]:
//             console.log("you win")
//             break;
//         case gameXo[0][2] == gameXo[1][2] && gameXo[0][2] == gameXo[2][2] && gameXo[1][2] == gameXo[2][2]:
//             console.log("you win")
//             break;
//         case gameXo[0][2] == gameXo[1][1] && gameXo[0][2] == gameXo[2][1] && gameXo[1][1] == gameXo[2][1]:
//             console.log("you win")
//             break;
//         default:
//             console.log("No one wins")
            
//     }

// }

// checkResult();


//              JUNK CODE               \\
// let space1 = "";
// let space2 = "";
// let space3 = "o";
// let space4 = "";
// let space5 = "";
// let space6 = "o";
// let space7 = "";
// let space8 = "";
// let space9 = "o";

// console.log(gameXo[1][0])

// console.log(`   |   |  `);
// console.log(` ${gameXo[0][0]} | ${gameXo[0][1]} | ${gameXo[0][2]} `);
// console.log(`   |   |  `);
// console.log(`----------`);
// console.log(`   |   |  `);
// console.log(` ${gameXo[1][0]} | ${gameXo[1][1]} | ${gameXo[1][2]} `);
// console.log(`   |   |  `);
// console.log(`----------`);
// console.log(`   |   |  `);
// console.log(` ${gameXo[2][0]} | ${gameXo[2][1]} | ${gameXo[2][2]} `);
// console.log(`   |   |  `);

// console.log(gameXo.length)

// const checkResult = () => {
//     switch (true) {
//         case space1 && space2 && space3 === "x" || "o":
//             console.log("You Win!");
//             break;
//         case space1 && space5 && space9 === "x" || "o":
//             console.log("You Win!");
//             break;
//         case space1 && space4 && space7 === "x" || "o":
//             console.log("You Win!");
//             break;
//         case space4 && space5 && space6 === "x" || "o":
//             console.log("You Win!");
//             break;
//         case space2 && space5 && space8 === "x" || "o":
//             console.log("You Win!");
//             break;
//         case space3 && space6 && space9 === "x" || "o":
//             console.log("You Win!");
//             break;
//         case space7 && space8 && space9 === "x" || "o":
//             console.log("You Win!");
//             break;
//         case space7 && space5 && space3 === "x" || "o":
//             console.log("You Win!");
//             break;
//         default:
//             console.log("bad luck");
//     }

// }



// checkResult()