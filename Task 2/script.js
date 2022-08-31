/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const button = document.getElementById("btn__element");

button.addEventListener("click", (event) => {
    event.preventDefault();

    let count = document.getElementById("btn__state");
    count.textContent = parseInt(count.textContent, 10) + 1;
});