function makeGrid(n) {
    const container = document.querySelector('#grid');
    removeAllChildNodes(container)
for (let i = 0; i < n; i++) {
    let row = document.createElement('div')
    row.className = 'row'
    for (let j = 0; j < n; j++) {
        let cell = document.createElement('div')
        cell.className = 'cell'
        let isMouseDown = false;
        document.addEventListener('mousedown', function (event) {
            isMouseDown = true;
        });
        document.addEventListener('mouseup', function (event) {
            isMouseDown = false;
        }); 
        cell.addEventListener('mousemove', function (event) {
            if (isMouseDown) {
                cell.style.backgroundColor = 'gray'
            }
        });
        cell.addEventListener('mousedown', function (event) {
            cell.style.backgroundColor = 'gray'
        });
        row.appendChild(cell)
    }
    document.getElementById('grid').appendChild(row);
}
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let slider = document.getElementById("gridRange");
let output = document.getElementById("sliderOutput");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.onmouseup = function() {
  output.innerHTML = this.value;
  makeGrid(slider.value)
}

let clear = document.getElementById("clearButton")

clear.onclick = function() {
    // makeGrid(slider.value) -- doing this is super slow
    let cells = document.getElementsByClassName("cell")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor="darkgray"
    }
}



makeGrid(slider.value)