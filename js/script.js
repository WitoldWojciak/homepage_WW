{
    const welcome = () => {
        console.log("Cześć! Ciesze się, że sprawdzasz mój kod, daj znać jak coś nie zostało zrobione dobrze :)")
    }

    welcome();

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeNameColor = document.querySelector(".body__themeNameColor");
        body.classList.toggle("dark");
        themeNameColor.innerText = body.classList.contains("dark") ? "niebieskie" : "ciemne";
    };

    const init = () => {
        const button = document.querySelector(".js-backgroundSwitcher");
        button.addEventListener("click", toggleBackground);
    };

    init();
}


