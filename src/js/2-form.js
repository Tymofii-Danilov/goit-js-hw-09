let formData = {
    email: "",
    message: ""
}
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const email = form.querySelector("input");
const message = form.querySelector("textarea");

form.addEventListener("input", handleInput);

function handleInput(event) {
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    } 
    if (event.target.name === "message") {
        formData.message = event.target.value.trim();
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function savedInfo() {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saved) {
        email.value = saved.email;
        message.value = saved.message;
    }
}

savedInfo();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
})