/*
* File: app.js
* Author: Nagy János
* Copyright: 2023, Nagy János
* Group: Szoft I-2 N
* Date: 2023-05-11
* Github: https://github.com/janos/
* Licenc: GNU GPL
*/

/* Kötések HTML elem és JavaScript változó */
const doc = {
    tbody: document.querySelector('#tbody')
};
/* Az alkalmazás állapota */
const state = {
    host: 'http://localhost:8000/',
    bikes: []
};
/* Az oldal betöltésre mi történjen */
window.addEventListener('load', () => {    
    init();
});
/* Az alkalmazás előkészítése */
function init() {
    getBikes();
}
/* Elhozzuk az adatokat a REST API-tól */
function getBikes() {    
    let endpoint = 'bikes';
    let url = state.host + endpoint;
    fetch(url)
    /* Komplett REST API válaszból csak a JSON adatok */
    .then(response => response.json())
    .then(result => {        
        state.bikes = result;
        render();
    });
}
/* Megjeleníti az adatokat a weblapon táblázatban */
function render() {
    var rows = '';
    /* A forEach() futtatható tömbökön, listákon */
    state.bikes.forEach( bike => {
        var row = `
        <tr>
            <td>${bike.id}</td>
            <td>${bike.name}</td>
            <td>${bike.wheel}</td>
            <td>${bike.usage}</td>
            <td>${bike.price}</td>
        </tr>
        `;
        rows += row;        
        console.log(bike.name)
    })
    /* A rows változóban összegyűjtött adatokat 
    a táblázatba tesszük */
    doc.tbody.innerHTML = rows;
}

