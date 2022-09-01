/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = 'cars.json';

const output = document.getElementById("output");

const addCard = (car) => {
    const card = document.createElement("div");
    const brand = document.createElement("h3");
    const models = document.createElement("ul");

    card.classList.add("card");

    output.append(card);
    card.append(brand, document.createElement("br"), models);


    brand.textContent = car.brand;

    car.models.forEach(item => {
        const model = document.createElement("li");
        console.log(item);
        models.append(model);
        model.textContent = item;
    });
}

fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => data.forEach(item => addCard(item)));
