const queryInput = document.querySelectorAll("input[name='query']");
const nameInput = document.getElementById("nameInput");
const lastNameInput = document.getElementById("lastNameInput");
const emailInput = document.getElementById("emailInput");
const consentCheck = document.getElementById("consentCheck");
const messageText = document.getElementById("messageBlock")
const successModal = document.querySelector(".success");
const form = document.querySelector("form");

const inputs = document.querySelectorAll("input, textarea");

const errorChecks = () => {
    let hasErrors = false;

    

    return hasErrors;
};

let successTimer = null;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const errors = errorChecks();
    if (!errors) {
        successModal.style.display = "block";
        successTimer = setTimeout(() => {
            successModal.style.display = "none";
        }, 5000);
    }
});