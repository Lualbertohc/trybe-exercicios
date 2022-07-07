let submit = document.querySelector("#submit-button");

function stop (event) {
    event.preventDefault();
    console.log("hello word")
}

submit.addEventListener('click', stop)

let reset = document.querySelector("#reset-form");

function resetForm (event) {
    event.preventDefault();
    console.log("hello word")
}

reset.addEventListener('click', resetForm)