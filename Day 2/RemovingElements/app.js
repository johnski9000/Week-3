const input = document.getElementById('input');
const button = document.getElementById('submit');
const button2 = document.getElementById('remove');
const list = document.getElementById("list");
/*from previous ex*/
button.addEventListener('click', () => {
 let listItem = document.createElement('li');
 let list = document.getElementsByTagName('ul')[0];
 listItem.textContent = input.value;

 list.appendChild(listItem);
 input.value = '';
})
button2.addEventListener('click', () => {
    list.removeChild(list.lastElementChild);
   })