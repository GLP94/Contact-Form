const queryInput = document.querySelectorAll("input[name='query']");
const emailInput = document.getElementById("emailInput");

const successModal = document.querySelector(".success");
const form = document.querySelector("form");

const inputs = document.querySelectorAll("input, textarea");

const errorChecks = () => {
    let hasErrors = false;

    document.querySelectorAll(".req, .reqEmail").forEach((el) => el.style.display = "none");

    const queryCheck = Array.from(queryInput).some((radio) => radio.checked);
    
    if (!queryCheck) {
        hasErrors = true;

        const firstRadio = queryInput[0];

        const label = firstRadio.parentElement;
        const flexCont = label.parentElement;
        const container = flexCont.parentElement;
        const req = container.querySelector(".req");
        if (req) {
            req.style.display = "block";
        }
    }

    inputs.forEach((input) => {

        input.classList.remove("error")

        if (input.type === "text" || input.id === "messageBlock") {
            if (input.id === "emailInput" && input.value && !/(.+)@(.+)/.test(input.value)) {
                hasErrors = true;
                const container = input.parentElement;
                const reqE = container.querySelector(".reqEmail");
                if (reqE) {
                    reqE.style.display = "block";
                    input.classList.add("error");
                }
            }

            if (input.value.trim() === "") {
                hasErrors = true;
                const container = input.parentElement;
                const req = container.querySelector(".req");
                if (req) {
                    req.style.display = "block";
                    input.classList.add("error");
                }
            }
        }

        if (input.type === "checkbox") {
            if (!input.checked) {
                hasErrors = true;
                const label = input.parentElement;
                const container = label.parentElement;
                const req = container.querySelector(".req");
                if (req) {
                    req.style.display = "block";
                }
            }
        }
    })

    return hasErrors;
};

let successTimer = null;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const errors = errorChecks();
    if (errors === false) {
        if (!successTimer) {
            successModal.style.display = "block";
            successTimer = setTimeout(() => {
                successModal.style.display = "none";
                successTimer = null;
            }, 5000);
        }
    }
});