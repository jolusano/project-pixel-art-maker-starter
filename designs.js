// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Get size of grid to be drawn
    const height = document.getElementById('inputHeight').valueAsNumber;
    const width = document.getElementById('inputWidth').valueAsNumber;

    // remove grid if shown
    document.body.removeChild(document.getElementsByTagName("table")[0]);

    // Create grid
    const grid = document.createElement('table');
    document.body.appendChild(grid);
    for (let n = 0; n < height; n++) {
        const row = document.createElement('tr')
        grid.appendChild(row);
        for (let m = 0; m < width; m++) {
            const cell = document.createElement('td')
            row.appendChild(cell);
        }
    }
    grid.addEventListener('click', function(e) {
        const selectedColor = document.getElementById("colorPicker").value;
        if (e.target.nodeName === 'TD')
            e.target.style.backgroundColor = selectedColor;
    });
}
