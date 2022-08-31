/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const pounds = (kilos) => kilos * 2.2046;
const grams = (kilos) => kilos * 1000;
const ounces = (kilos) => kilos * 35.274;

function calculate(kilos) {
    const output = document.getElementById("output");

    const table = document.createElement("table");

    const thUnit = document.createElement("th");
    const thAbr = document.createElement("th");
    const thAmount = document.createElement("th");

    const tableRow = document.createElement("tr");
    const tdUnit = document.createElement("td");
    const tdAbr = document.createElement("td");
    const tdAmount = document.createElement("td");

    thUnit.textContent = "Units";
    thAbr.textContent = "Abbreviation";
    thAmount.textContent = "Amount";

    tdUnit.textContent = "Pounds";
    tdAbr.textContent = "lb";
    tdAmount.textContent = pounds(kilos);

    output.append(table, thUnit, thAbr, thAmount, tableRow, tdUnit, tdAbr, tdAmount);
}

document.addEventListener('submit', (event) => {
    event.preventDefault();

    let kilos = document.getElementById("search").value;

    calculate(kilos);
});

// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter, errMsg) {
    ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout"].forEach(function (event) {
        textbox.addEventListener(event, function (e) {
            if (inputFilter(this.value)) {
                // Accepted value
                if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
                    this.classList.remove("input-error");
                    this.setCustomValidity("");
                }
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                // Rejected value - restore the previous one
                this.classList.add("input-error");
                this.setCustomValidity(errMsg);
                this.reportValidity();
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                // Rejected value - nothing to restore
                this.value = "";
            }
        });
    });
}

setInputFilter(document.getElementById("search"), function (value) {
    return /^\d*\.?\d*$/.test(value); // Allow digits and '.' only, using a RegExp
}, "Only digits and '.' are allowed");
