const query = document.querySelectorAll("input[name='query']");
const name = document.getElementById("nameInput");
const lastName = document.getElementById("lastNameInput");
const email = document.getElementById("emailInput");
const consent = document.getElementById("consentCheck");
const submit = document.querySelector("input[type='submit']");
const success = document.querySelector(".success");

const errorCheck = Array.from(query).some(rad => rad.checked);

const successTimer = null;

function error() {

}

function submitHandle(e) {
    e.preventDefault();
    success.style.display = "block";
    successTimer = setTimeout(() => {
        success.style.display = "none";
    }, 5000)
}

submit.addEventListener("click", submitHandle)