// Labels for side and top elements ,
const sideText = ["Side 1", "Side 2", "Side 3", "Side 4", "Side 5", "Side 6", "Side 7", "Side 8", "Side 9"];
const topText = ["Top 1", "Top 2", "Top 3", "Top 4", "Top 5", "Top 6", "Top 7", "Top 8", "Top 9"];

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
    grid.appendChild(cell);
}
