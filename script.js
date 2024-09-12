const container = document.getElementById("grid-container");


function createGrid(size) {
    
    container.innerHTML = '';
    
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
    
        square.addEventListener("mouseover", event => {
            square.style.background = "red";
        });
    
        container.appendChild(square);
    }
}


const button = document.querySelector('button');
button.addEventListener('click', function() {
    const userInput = prompt('Enter the grid size (e.g., 16 for a 16x16 grid):');
    const gridSize = parseInt(userInput);


    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else if (gridSize > 100) {
        alert("Please enter a number that's less than or equal to 100.");
    }
     else {
        alert('Please enter a valid number.');
    }
});


createGrid(16);
