
function changeTheme() {

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

function changeFonts() {

    if (document.querySelector("p").style.fontFamily = "'Courier New', Courier, monospace")
    document.body.style.background === "red";
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
        changeTheme()
    })

    let font = document.getElementById("font");
    font.addEventListener("click", function () {
        changeFonts()
    })

    let collorFont = document.getElementById("collorFont");
    collorFont.addEventListener("click", function () {
        changeCollorFont()
    })
}