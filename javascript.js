// create n rows and append n cells to each row
// listeners for drawing and adding styles

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
                cell.style.backgroundColor = brushColor
                if (rainbowOn == true) {
                    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
                    brushColor = randomColor;
                }
            }
        });
        cell.addEventListener('mousedown', function (event) {
            cell.style.backgroundColor = brushColor
            if (rainbowOn == true) {
                let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
                brushColor = randomColor;
            }
        });
        row.appendChild(cell)
    }
    document.getElementById('grid').appendChild(row);
}
}

// removes child nodes while there are any left

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let slider = document.getElementById("gridRange");
let output = document.getElementById("sliderOutput");
output.innerHTML = slider.value; // Display the default slider value

let gridBox = document.querySelector('#grid') 

// Update the current slider value (each time you drag the slider handle)
slider.onmouseup = function() {
  output.innerHTML = this.value;
  makeGrid(slider.value)
}

let clear = document.getElementById("clearButton")

clear.onclick = function() {
    // makeGrid(slider.value) -- doing this is super slow
    gridBox.classList.remove('shake'); // reset animation
    void gridBox.offsetWidth; // trigger reflow
    gridBox.classList.add('shake'); // start animation
    let cells = document.getElementsByClassName("cell")
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor="darkgray"
    }
}

let toggleGridlines = document.getElementById("gridlinesButton")
let gridToggle = false;

// loop through every cell and apply / remove border styling

toggleGridlines.onclick = function() {
    if (gridToggle == false) {
        gridToggle = true;
        toggleGridlines.classList.add("buttonClicked")
        // avoids overlap with cell border
        gridBox.style.borderTop="0px"
        gridBox.style.borderLeft="0px"
        let cells = document.getElementsByClassName("cell")
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.borderTop="1px solid #666666"
            cells[i].style.borderLeft="1px solid #666666"
        }
    } else {
        gridToggle = false;
        toggleGridlines.classList.remove("buttonClicked")
        gridBox.style.border="1px solid #666666"
        let cells = document.getElementsByClassName("cell")
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.border="0px"
        }
    }

}

let colorPick = document.getElementById("colorPicker")
let brushColor = colorPick.value

colorPick.onchange = function() {
    brushColor = colorPick.value
}

// button to toggle if rainbowOn, if not revert to colorPick value

let toggleRainbow = document.getElementById("rainbowButton")
let rainbowOn = false

toggleRainbow.onclick = function() {
if (rainbowOn == false) {
    rainbowOn = true;
    toggleRainbow.classList.add("buttonClicked")
} else {
    rainbowOn = false;
    brushColor = colorPick.value
    toggleRainbow.classList.remove("buttonClicked")
}
}

makeGrid(slider.value)