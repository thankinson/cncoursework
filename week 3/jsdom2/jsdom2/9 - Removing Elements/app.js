const myRemove = document.getElementById("remove")
// const myRemov3 = document.querySelector("#remove")


const myList = document.getElementById("list")

myRemove.addEventListener("click", () => {
    let lastItem = document.querySelector('li:last-child')
    myList.removeChild(lastItem)
})

// button.addEventListener('click', () => {
//     let listItem = document.createElement('li');
//     let list = document.getElementsByTagName('ul')[0];
//     listItem.textContent = input.value;
//     list.appendChild(listItem);
//     input.value = ""
// })