// # Project Idea 2
// - Create a button inside your body element
// - Whenever i click on button change background color of body randomly

const body = document.getElementById("main");
const colorButton = document.getElementById("btn");

document.getElementsByTagName("body");

const colors = ["red", "blue", "purple","yellow", "pink", "orange", "lightgray", "gray","brown","aqua"];

colorButton.addEventListener("click", () => {
    body.style.background = colors[Math.floor(Math.random()*10)];
});

