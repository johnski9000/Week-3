const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");

// function changeImage(){

// }

button.addEventListener("click", () =>{
    image.src = input.value;
})