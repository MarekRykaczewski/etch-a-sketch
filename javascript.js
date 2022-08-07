function makeGrid(n) {
for (let i = 0; i < n; i++) {
    let row = document.createElement('div')
    row.className = 'row'
    for (let j = 0; j < n; j++) {
        let cell = document.createElement('div')
        cell.className = 'cell'
        row.appendChild(cell)
    }
    document.getElementById('grid').appendChild(row);
}
}

makeGrid(16)