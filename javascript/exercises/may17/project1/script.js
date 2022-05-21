// # Project Idea 1
// - Have a box of height (200px X 200px) on your page
// - Create multiple buttons with keycode numbers on it (this is just for visual purposes)
// - Whenever i keypress on any keyboard take an action based on listed above keycodes and change 
// something inside the box (example: change color etc.)

const body = document.getElementsByTagName("body")[0];
const box = document.getElementById("box");

body.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        // box.innerHTML = "";
        console.log("Enter clicked");
        box.innerHTML = `${event.keyCode} clicked`;
        // console.log(String.fromCharCode(13));
        // console.log(keyboardMap[13]);
    }
});

// const btn = document.getElementById("box");