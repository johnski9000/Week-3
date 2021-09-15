const input = document.getElementById("input");
const button = document.getElementById("submit");
const button2 = document.getElementById("hide");
let list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", ()=> {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    list.appendChild(listItem);
    input.value = "";
 //console.log(listItem);
})
button2.addEventListener("click", ()=> {
    if (list.style.display == "none"){
        list.style.display = "block";
        button2.textContent = "hide";
    } else{
        list.style.display = "none";
        button2.textContent = "show";
    }
})