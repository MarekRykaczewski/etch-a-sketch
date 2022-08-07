const cell = document.createElement('div');
cell.classList.add('cell');


function makeRow(n) {
    let newDimensions = 900 / n
    cell.style.width= newDimensions + 'px'
    cell.style.height= newDimensions + 'px'
    for (let i = 0; i < n; i++) {
        grid.appendChild(cell.cloneNode(true));
    }
    
}

makeRow(3)