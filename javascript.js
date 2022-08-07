const cell = document.createElement('div');
cell.classList.add('cell');


function makeGrid(n) {
    for (let i = 0; i < n; i++) {
        grid.appendChild(cell.cloneNode(true));
    }
    
}

makeGrid(3)