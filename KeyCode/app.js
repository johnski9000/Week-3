const letter = document.getElementById("letter");
const eventkey = document.getElementById("eventkey");
const eventlocation = document.getElementById("eventlocation");
const eventwhich = document.getElementById("eventwhich");
const eventcode = document.getElementById("eventcode");




function keycode(){
    let key = event.keyCode;
    console.log(key);
    }


window.addEventListener('keydown', function (e) {
    letter.innerHTML = `${e.key}`;
}, false);
window.addEventListener('keydown', function (e) {
    eventkey.innerHTML = `${e.key}`;
}, false);
window.addEventListener('keydown', function (e) {
    eventlocation.innerHTML = event.location;
}, false);
window.addEventListener('keydown', function (e) {
    eventwhich.innerHTML = e.keyCode;
}, false);
window.addEventListener('keydown', function (e) {
    eventcode.innerHTML = event.code;
}, false);