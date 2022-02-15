const submit = document.getElementById("submit")
const input = document.getElementById("input")
let imageChange = document.getElementById("image")


submit.addEventListener("click", () => {imageChange.src = input.value;})

// submit.addEventListener("click", () => {

//     document.getElementById("image").src=imageChange;
    // document.getElementById("myImageId").src="newSource.png";
    // // 


// })
