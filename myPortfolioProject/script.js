const profilePhoto = document.getElementsByClassName("profile-photo")[0];
const popUpLayer = document.getElementById("pop-up-layer");
const closeModal = document.getElementById('close-pop-up');
const submitBtn = document.getElementsByClassName('btn-submit')[0];
const email = document.getElementsByClassName('form-control')[0];

profilePhoto.addEventListener("click", () => {
    popUpLayer.style.display = 'flex';
})

closeModal.addEventListener("click", function() {
    popUpLayer.style.display = 'none';
})

submitBtn.addEventListener("click", () => {
    emailValue = email.value;
    if (!emailValue.endsWith(".com") || !emailValue.includes("@")) {
        alert("Enter valid email");
    } else {
        popUpLayer.style.display = 'none';
    }
})