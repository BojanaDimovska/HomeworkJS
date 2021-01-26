let table = document.getElementById('main');
for (let i = 1; i < 4; i++){
    let tr = document.createElement('tr');   

    let td1 = document.createElement('td');
    let td2 = document.createElement('td');

    let row = document.createTextNode('Row 1, cell 1');
    let cell = document.createTextNode('Row 1, Cell 2 ');

    td1.appendChild(row);
    td2.appendChild(cell);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}
document.body.appendChild(table);