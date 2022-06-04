//Choose random colors, change background color of body element when button clicked!

const colors = ['#8bc34a', '#00bcd4', '#ccc075', '#c075cc', '#333'];

const changeColorBtn = document.getElementsByClassName("btn")[0];
const body = document.getElementsByTagName("body")[0];

changeColorBtn.addEventListener("click", () => {
    const randomNo = Math.floor(Math.random(colors.length - 1) * colors.length);
    body.style.background = colors[randomNo];
})
