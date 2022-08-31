/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = 'cars.json';

$.getJSON("test.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});

console.log(mydata);
const output = document.getElementById("output");

const addCard = (car) => {
    const card = document.createElement("div");
    const brand = document.createElement("h4");
    const models = document.createElement("ul");
    const model = document.createElement("li");

    card.classList.add("card");

    output.append(card);
    card.append(brand, moodels);

    car.models.forEach(item => {
        models.append(model);
        model.textContent = item;
    });

}