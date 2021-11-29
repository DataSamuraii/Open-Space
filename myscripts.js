let Btn = document.getElementById("OkButton");
let Pwd = document.getElementById("pwd");
let inputs = document.getElementsByTagName("input");
let Launch = document.getElementById("launchButton");

function remover() {
    if (Pwd.value === "TrustNo1") {
        for (let index = 0; index < inputs.length; index++) {
            inputs[index].removeAttribute("disabled");
        }
        Pwd.setAttribute("disabled", "disabled");
        Btn.setAttribute("disabled", "disabled");
        Launch.setAttribute("disabled", "disabled");
    }
}
Btn.addEventListener("click", remover);

let levers = document.getElementsByClassName("levers");
let leversChildren = levers[0].children
let result = false;

let checkbox = document.getElementsByClassName("check-buttons");
let checkboxChildren = checkbox[0].children;
let resultCheckbox = false;

function Checker() {
    for (let i = 0; i < leversChildren.length; i++) {
        leversChildren[i].onchange = function () {
            for (let x = 0; x < leversChildren.length; x++) {
                if (leversChildren[x].value === "11") {
                    result = true;
                } else {
                    result = false;
                    break
                }
            }
            if (result === true && resultCheckbox === true) {
                Launch.disabled = false;
            }
            if (result === false || resultCheckbox === false) {
                Launch.setAttribute("disabled", "disabled");
            }
        }
    }

    for (let w = 0; w < checkboxChildren.length; w++) {
        checkboxChildren[w].onchange = function () {
            for (let e = 0; e < checkboxChildren.length; e++) {
                if (checkboxChildren[e].checked === true) {
                    resultCheckbox = true;
                } else {
                    resultCheckbox = false;
                    break
                }
            }
            if (result === true && resultCheckbox === true) {
                Launch.disabled = false;
            }
            if (result === false || resultCheckbox === false) {
                Launch.setAttribute("disabled", "disabled");
            }
        }
    }
}
Checker();

let rocket = document.getElementById("rocket")
function myMove() {
    rocket.animate([
        { // current position of rocket
            left: "15%",
            bottom: "32%"
        },
        { //  final position of rocket
            left: '50%',
            bottom: '120%'
        }
    ], {
        // timing options
        duration: 5000,
        iterations: 1
    })
    Launch.setAttribute("disabled", "disabled");
    setTimeout(function () {
        rocket.remove()
    }, 5000)
}
Launch.addEventListener("click", myMove);
