const newRow = document.createElement('div');
newRow.classList.add('newRow');


function makeRow(n) {
    let newDimensions = 900 / n
    newRow.style.width= newDimensions + 'px'
    newRow.style.height= newDimensions + 'px'
    for (let i = 0; i < n; i++) {
        grid.appendChild(newRow.cloneNode(true));
    }
    
}

makeRow(3)