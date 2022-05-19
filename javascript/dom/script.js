const title_id = document.getElementById("title");
console.log(title_id);

const title_class = document.getElementsByClassName("title");
console.log(title_class);

const loginButton = document.getElementById("login-btn");
loginButton.style.color = "blue";

loginButton.addEventListener("mouseover", () => {
    loginButton.style.color = "green";
});

loginButton.addEventListener("mouseleave", () => {
    loginButton.style.color = "red";
});
