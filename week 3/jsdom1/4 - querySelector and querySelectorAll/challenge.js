const listItems = document.querySelectorAll("li");
// const listItems = document.querySelectorAll("li:nth-child(even)");
// console.log(listItems);
// console.log(listItems.length);

const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];


// for (let i = 0; i < listItems.length; i++){
//     listItems[i].style.color = colours[i]
// }

let x = 0
for (let i = 0; i < listItems.length; i++){
    listItems[i].style.color = colours[x]
    x++
    if (x == colours.length){
        x = 0
    } 
}



