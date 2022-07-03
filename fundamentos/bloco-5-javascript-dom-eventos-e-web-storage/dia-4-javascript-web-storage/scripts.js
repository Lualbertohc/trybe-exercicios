
function darkLightTheme() {

    if (document.body.style.background === "white") {
        document.getElementById("header").style.backgroundColor = "white";
        document.body.style.background = "black";
        document.querySelector("p").style.color = "white";
    } else {
        document.getElementById("header").style.backgroundColor = "black";
        document.body.style.background = "white";
        document.querySelector("p").style.color = "black";
    }

}

function menuFonts() {

    let menu = document.getElementById("buttons");
    let newMenu = document.createElement("div");
    newMenu.innerHTML = "<button> Arial </button> <button> Times New Roman </button> <button> monospace </button>";
    menu.appendChild(newMenu);

}

function changeCollorFont() {

    if (document.querySelector("p").style.color === "white" && document.body.style.background === "black") {
        document.querySelector("p").style.color = "yellow";
    } else if (document.querySelector("p").style.color === "yellow" && document.body.style.background === "black") {
        document.querySelector("p").style.color = "white";
    }
}

window.onload = function () {

    let theme = document.getElementById("theme");
    theme.addEventListener("click", function () {
        darkLightTheme()
    })

    let font = document.getElementById("font");
    font.addEventListener("click", function () {
        menuFonts()
    })

    let collorFont = document.getElementById("collorFont");
    collorFont.addEventListener("click", function () {
        changeCollorFont()
    })
}