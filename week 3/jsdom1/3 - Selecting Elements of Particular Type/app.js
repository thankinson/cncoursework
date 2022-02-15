// const myDrinks = document.getElementById("drinks");
const letters = document.getElementsByTagName("li");
const list = document.getElementsByTagName("li");
const listTwo = document.getElementsByClassName("not-orange");
let first = letters[0];
console.log(first);

// for (let x = 0; x < list.length; x++) {
//     letters[x].style.color = "red";
// }

// for (let x = 0; x < listTwo.length; x++) {
//     listTwo[x].style.color = "orange";
// }

for (i = 0; i < letters.length; i++){
    if (letters[i].className == "not-orange"){
        letters.style.color = "green"
    } else {
        letters[i].style.color = "purple"
    }
}

// list.addEventListener("click", ()=>{
//     for (let i = 0; < letters.length; i++){
//         letters.style.color = red
//     }
// });


// const paragraphs = document.getElementsByTagName("p")

// myButton.addEventListener("click", ()=>{
//     myHeading.style.color = myInput.value;
// });
