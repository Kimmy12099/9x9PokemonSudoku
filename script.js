// Add text to side and top elements 
const sideText = ["Side Text 1", "Side Text 2", "Side Text 3", "Side Text 4", "Side Text 5", "Side Text 6", "Side Text 7", "Side Text 8", "Side Text 9"];
const topText = ["Top Text 1"];

// Populate side elements
sideText.forEach((text, index) => {
    document.getElementById(`side-${index + 1}`).innerText = text;
});

// Populate top elements
topText.forEach((text, index) => {
    document.getElementById(`top-${index + 1}`).innerText = text;
});

// Generate 9x9 grid cells
const grid = document.getElementById('grid');
for (let i = 1; i <= 81; i++) {
    const cell = document.createElement('div');
    cell.innerText = `Cell ${i}`;
    grid.appendChild(cell);
}