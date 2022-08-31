/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const output = document.getElementById("output");
const button = document.getElementById("btn");
const message = document.getElementById("message");

const table = document.createElement("div");
const tableHeadLogin = document.createElement("div");
const tableHeadAvatar = document.createElement("div");
const tableHeadLoginText = document.createElement("h2");
const tableHeadAvatarText = document.createElement("h2");

table.classList.add("table");

output.append(table);


button.addEventListener('click', (event) => {
    event.preventDefault();

    fetch(ENDPOINT).then(res => res.json()).then(users => users.forEach(user => addRow(user)));

    output.style.backgroundColor = "#222";

    table.innerHTML = '';
    table.style.display = "grid";

    tableHeadLoginText.textContent = "User name";
    tableHeadAvatarText.textContent = "Avatar";
    table.append(tableHeadLogin, tableHeadAvatar);
    tableHeadLogin.append(tableHeadLoginText);
    tableHeadAvatar.append(tableHeadAvatarText);
});

const addRow = (user) => {
    const tableDataLogin = document.createElement("div");
    const tableDataLoginText = document.createElement("h4");
    const tableDataAvatar = document.createElement("div");
    const tableDataAvatarImg = document.createElement("img");

    tableDataLoginText.textContent = user.login.toUpperCase();
    tableDataAvatarImg.src = user.avatar_url;

    table.append(tableDataLogin, tableDataAvatar);

    tableDataLogin.append(tableDataLoginText);
    tableDataAvatar.append(tableDataAvatarImg);

    message.innerHTML = '';
};