const input = document.getElementById('input');
const button = document.getElementById('submit');
const removeBtn = document.getElementById('remove');
const listItems = document.getElementsByTagName("li");
button.addEventListener('click', () => {
 let listItem = document.createElement('li');
 let list = document.getElementsByTagName('ul')[0];
 listItem.textContent = input.value;

 list.appendChild(listItem);
 input.value = '';
})
removeBtn.addEventListener('click', () => {
 let listItem = document.querySelector('li:last-child');
 let list = document.getElementsByTagName('ul')[0];
 list.removeChild(listItem);
})

for (let listItem of listItems) {
    listItem.addEventListener("mouseover", () => {
        listItem.textContent = listItem.textContent.toUpperCase();
 });
    listItem.addEventListener("mouseout", () => {
        listItem.textContent = listItem.textContent.toLowerCase();
 });
}