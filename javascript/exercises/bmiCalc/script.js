// Solution 1 -> onclick event attribute
function calcBmi(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const bmi = weight / ((height*height)/10000);
    if (isNaN(bmi)) {
        document.getElementById("results").innerHTML = "Please enter number";
    } else {
        document.getElementById("results").innerHTML = bmi;
    }
}

// Solution 2 -> eventListener
const calc = document.getElementById("btn");
calc.addEventListener("click", () => {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const bmi = weight / ((height*height)/10000);
    if (isNaN(bmi)) {
        document.getElementById("results").innerHTML = "Please enter number";
    } else {
        document.getElementById("results").innerHTML = bmi;
    }
})