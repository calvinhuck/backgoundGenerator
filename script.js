var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var random = document.querySelector(".random");

function displayTextContent() {
    css.textContent = body.style.background + ";";
}

function setGradient() {
    body.style.background = "linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";

    displayTextContent();
}

function generateColors() {
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*12345678).toString(16);

    body.style.background = "linear-gradient(to right, "+ "#" + randomColor1 + ", " + "#" + randomColor2 + ")";

    color1.value = "#" + randomColor1;
    color2.value = "#" + randomColor2;

    displayTextContent();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", generateColors);