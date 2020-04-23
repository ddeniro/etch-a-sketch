let gridSize = 16;
const grid = document.querySelector('#grid');
const removeGrid = _ => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        grid.removeChild(square);
    })
}
const drawGrid = (gridSize) => {
    grid.style.setProperty('--grid-rows', gridSize);
    grid.style.setProperty('--grid-cols', gridSize);

    for (i = 0; i < (gridSize ** 2); i++) {
        const square = document.createElement('div');
        grid.appendChild(square).className = 'square';

        square.addEventListener('mouseover', () => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            square.style.setProperty('background-color', `#${randomColor}`);
        })
    };
};

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    removeGrid();
    gridSize = prompt('Enter size of grid. e.g 16');
    drawGrid(gridSize);
})