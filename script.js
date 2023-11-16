let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let hola = document.getElementById("hola");

console.log(hola.innerHTML)

const handleColors = () => {
	body.style.background =
    "linear-gradient(to right, " + color1.value + ',' + color2.value + ')';
	css.textContent = body.style.background + ";"
}

// console.log(css,color1,color2);
color1.addEventListener("input", handleColors);

color2.addEventListener("input", handleColors);
