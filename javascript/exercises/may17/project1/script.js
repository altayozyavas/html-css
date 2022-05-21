// # Project Idea 1
// - Have a box of height (200px X 200px) on your page
// - Create multiple buttons with keycode numbers on it (this is just for visual purposes)
// - Whenever i keypress on any keyboard take an action based on listed above keycodes and change 
// something inside the box (example: change color etc.)

const ids = [81, 87, 69, 65, 83, 68];
const body = document.getElementsByTagName("body")[0];
const allButtons = document.getElementsByTagName("button");
const messageBox = document.getElementById("message");
const errMessage = "Wrong input, try again!";
const successMessage = "Nice Choice!";
const green = "green";

body.addEventListener("keydown", (event) => {
    styleAllBtns("none", successMessage);
    const k = event.keyCode;
    (ids.includes(k)) ? document.getElementById(k).style.background = green : styleAllBtns("red", errMessage);
});

function styleAllBtns(color, message) {
    (message == successMessage) ? messageBox.style.color = green : messageBox.style.color = color;
    messageBox.innerHTML = message;
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].style.background = color;
    }
}