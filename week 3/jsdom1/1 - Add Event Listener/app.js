// document.getElementById("heading").style.color = "yellow";
// document.body.style.backgroundColor = "grey";
// const myHeading = document.getElementById("heading");

myHeading.addEventListener("click",() =>{
    myHeading.style.color = "red";
    setTimeout(()=> {myHeading.style.color = "black"}, 5000 )
});

// timeoutID = setTimeout(function[ delay, arg1, arg2]);


// setTimeout(()=> {console.log("1")}, 1000 )
// setTimeout(()=> {console.log("2")}, 2000 )
// setTimeout(()=> {console.log("3")}, 3000 )
// setTimeout(()=> {console.log("4")}, 4000 )
// setTimeout(()=> {console.log("5")}, 5000 )


let y = 1000
let x = 0
for (let i = 0; i < 6; i++){
     setTimeout(()=> {console.log(i)},  y)
    y++
  
    // if (y == 5000){
    //     y = 0
    // }

}



    // setTimeout(()=> {alert("hello")}, 6000 )
