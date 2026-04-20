const clickBtn = document.getElementById("clickBtn");
const textInput = document.getElementById("textInput");
const selectBox = document.getElementById("selectBox");
const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");

clickBtn.addEventListener("click", () => {
    output.innerHTML = "Button clicked!";
});

textInput.addEventListener("input", () => {
    output.innerHTML = "Typing: " + textInput.value;
});

selectBox.addEventListener("change", () => {
    output.innerHTML = "Selected: " + selectBox.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    output.innerHTML = "Form submitted: " + nameInput.value;
});

textInput.addEventListener("keyup", (e) => {
    output.innerHTML = "Last key: " + e.key;
});

clickBtn.addEventListener("mouseover", () => {
    output.innerHTML = "Mouse over button";
});

clickBtn.addEventListener("mouseout", () => {
    output.innerHTML = "Mouse left button";
});

textInput.addEventListener("focus", () => {
    textInput.style.backgroundColor = "#e3f2fd";
});

textInput.addEventListener("blur", () => {
    textInput.style.backgroundColor = "white";
});