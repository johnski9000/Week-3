const image = document.getElementById("cat");
const button = document.getElementById("submit");
const myHeading = document.getElementById("heading");
const myButton = document.getElementById("button");
const myInput = document.getElementById("input");
const paragraphs = document.getElementsByTagName("p");
const list = document.getElementsByTagName("li");
const notOrange = document.getElementsByClassName("not-orange");
const listItems = document.querySelectorAll("li:nth-child(even)");
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];


let firstPara = paragraphs[0];

button.addEventListener("click", () => {
    if (image.style.display == "none"){
        image.style.display = "block";
        button.textContent = "hide";
    } else{
        image.style.display = "none";
        button.textContent = "show";
    }
})
firstPara.addEventListener("click", () => {
    if (firstPara.style.color == "purple"){
        firstPara.style.color = "red";
    } else {
        firstPara.style.color = "purple";
    }
})

document.getElementById("heading").style.backgroundColor = "white";


myHeading.addEventListener("click", () => {
    if (myHeading.style.color == "purple"){
        myHeading.style.color = "red";
        myHeading.textContent = "The Next Dom"
    } else {
        myHeading.style.color = "purple";
        myHeading.textContent = "The Previous Dom"
    }
})

myButton.addEventListener("click", () => {
    myHeading.style.color = input.value;
    myHeading.textContent = "The Manual Dom";
})

for (i=0; i<list.length; i++){
    list[i].style.color = colours[i];
}




// for(i=0; i<list.length; i++){
//     listItems[i].style.color = "lightgreen"
// }


// for (let i = 0; i < list.length; i++) {
//     list[i].style.color = "orange";
// }
// for (let i = 0; i < list.length; i++) {
//     notOrange[i].style.color = "red";
// }