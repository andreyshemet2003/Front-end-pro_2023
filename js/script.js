const body = document.querySelector('body');
const table = document.createElement('table');

body.insertBefore(table, body.lastChild);
const row = prompt('Input quantity rows');
const columns = prompt('Input quantity culumns');
let counter = 1;


Array.from({ length: row }).map(() => {
    const tr = document.createElement('tr');
    table.append(tr);

    Array.from({ length: columns }).map(() => {
        const td = document.createElement('td');
        tr.append(td);
        td.innerText = `${counter++}`;
    });
});