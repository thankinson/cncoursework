const myHeading = document.getElementById("heading");
const myInput = document.getElementById("input");
const myButton = document.getElementById("button");


// changes the colour of the heading when a colour value is typed into the input box
myButton.addEventListener("click", ()=>{
    myHeading.style.color = myInput.value;
});

