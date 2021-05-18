console.log("Cześć! Ciesze się, że sprawdzasz mój kod, daj znać jak coś nie zostało zrobione dobrze :)")

let button = document.querySelector(".js-backgroundSwitcher");
let body = document.querySelector(".body");
let themeNameColor = document.querySelector(".body__themeNameColor");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeNameColor.innerText = body.classList.contains("dark") ? "niebieskie" : "ciemne";
});

