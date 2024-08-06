// Labels for side and top elements
const sideText = ["Side 1", "Side 2", "Side 3", "Side 4", "Side 5", "Side 6", "Side 7", "Side 8", "Side 9"];
const topText = ["Top 1", "Top 2", "Top 3", "Top 4", "Top 5", "Top 6", "Top 7", "Top 8", "Top 9"];

// Populate side elements
sideText.forEach((text, index) => {
    const sideElement = document.getElementById(`side-${index + 1}`);
    if (sideElement) sideElement.innerText = text;
});

// Populate top elements
topText.forEach((text, index) => {
    const topElement = document.getElementById(`top-${index + 1}`);
    if (topElement) topElement.innerText = text;
});

// Generate 9x9 grid cells
const grid = document.getElementById('grid');
if (grid) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            // Determine 3x3 section index (1-based for bubble IDs)
            const sectionIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3) + 1;
            cell.dataset.section = sectionIndex;

            grid.appendChild(cell);
        }
    }
}

// Track the currently open text bubble
let openBubble = null;

// Show and hide text bubbles on hover
const textBubbles = document.querySelectorAll('.textbubble');

grid.addEventListener('mouseover', (event) => {
    const cell = event.target.closest('.cell');
    if (cell) {
        const sectionIndex = cell.dataset.section;
        if (openBubble === null || openBubble !== `textbubble-${sectionIndex}`) {
            if (openBubble) {
                const previousBubble = document.getElementById(openBubble);
                if (previousBubble) previousBubble.style.display = 'none';
            }
            openBubble = `textbubble-${sectionIndex}`;
            const bubble = document.getElementById(openBubble);
            if (bubble) {
                bubble.style.display = 'flex';
                // Center the bubble within its cell
                const rect = cell.getBoundingClientRect();
                bubble.style.top = `${rect.top - grid.getBoundingClientRect().top}px`;
                bubble.style.left = `${rect.left - grid.getBoundingClientRect().left}px`;
            } else {
                console.error(`Bubble with ID ${openBubble} not found.`);
            }
        }
    }
});

grid.addEventListener('mouseout', (event) => {
    if (openBubble) {
        const gridRect = grid.getBoundingClientRect();
        const mouseRect = { 
            top: event.clientY, 
            bottom: event.clientY, 
            left: event.clientX, 
            right: event.clientX 
        };
        if (
            mouseRect.top < gridRect.top || 
            mouseRect.bottom > gridRect.bottom || 
            mouseRect.left < gridRect.left || 
            mouseRect.right > gridRect.right
        ) {
            const bubble = document.getElementById(openBubble);
            if (bubble) bubble.style.display = 'none';
            openBubble = null;
        }
    }
});

// Close the currently open bubble when clicking outside
document.addEventListener('click', (event) => {
    if (openBubble) {
        const bubble = document.getElementById(openBubble);
        if (!grid.contains(event.target) && event.target !== bubble) {
            if (bubble) bubble.style.display = 'none';
            openBubble = null;
        }
    }
});

// Function to show the pop-up at the start
function showPopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'flex';
    }
}

// Function to hide the pop-up
function hidePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Event listener for the close button
document.getElementById('close-btn').addEventListener('click', hidePopup);

// Show the pop-up when the page loads
window.addEventListener('load', showPopup);
