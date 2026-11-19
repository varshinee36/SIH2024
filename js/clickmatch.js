const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const articles = [
    { id: 1, title: "'Socialist' in the Preamble mean", content: "Reduce wealth gap" },
    { id: 2, title: "Secular", content: "All religions are treated equally" },
    { id: 3, title: "Social, Economic, and Political Justice", content: "helping those who need it, and legal rights" },
    { id: 4, title: "Preamble show the goal", content: "Equal opportunities for everyone" },
    { id: 5, title: "right to speak freely", content: "People can express their views and disagree" },
    { id: 6, title: "right to equality promote", content: "No discrimination based on caste, religion, or gender" },
    { id: 7, title: "banning 'untouchability' contribute", content: "promotes dignity" },
    { id: 8, title: "heart and soul of the Constitution", content: "citizens to protect their fundamental rights" },
    { id: 9, title: "freedom of religion promote", content: "can practice their faith without fear" },
    { id: 10, title: "right to education empower", content: "access to knowledge and reduces inequality" },
    { id: 11, title: "Right to Information", content: "People can ask for government information" },
    { id: 12, title: "Equal Access to Jobs", content: "Everyone has a fair chance at getting a job" },
    { id: 13, title: "Fair Trial", content: "Everyone gets a fair hearing in court" },
    { id: 14, title: "Right to Live Safely", content: "Protection of life and personal freedom" },
    { id: 15, title: "Freedom of Movement", content: "No restrictions on travel within the country" },
    { id: 16, title: "Equal Pay for Work", content: "Same pay for the same work" },
    { id: 17, title: "Right to Vote", content: "Everyone has a say in elections" },
    { id: 18, title: "Access to Public Services", content: "Equal access to things like healthcare and education" },
    { id: 19, title: "Non-Discrimination in Housing", content: "Equal housing rights" },
    { id: 20, title: "Right to Assemble", content: "Freedom to hold meetings and protests" }
];

const colors = [
    '#ff5733', '#33ff57', '#3357ff', '#ff33a5', '#a533ff',
    '#ff9133', '#33fff5', '#33ffb8', '#ffd433', '#ff3333'
];

const initialColor = 'blue'; // Initial color for all items

// Function to randomly select a specified number of items from the array
function getRandomSelection(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

const numItems = 10; // Number of items to select randomly
const randomSelection = getRandomSelection(articles, numItems);

// Function to render the page
function renderPage() {
    const leftColumn = document.getElementById('left-column');
    const rightColumn = document.getElementById('right-column');
    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';

    randomSelection.forEach((item) => {
        const leftItem = document.createElement('div');
        leftItem.className = 'item';
        leftItem.dataset.match = item.id;
        leftItem.id = `match-${item.id}`;
        leftItem.textContent = item.title;
        leftItem.style.backgroundColor = initialColor;

        leftColumn.appendChild(leftItem);
    });

    const shuffledItems = shuffle([...randomSelection]);

    shuffledItems.forEach((item) => {
        const rightItem = document.createElement('div');
        rightItem.className = 'item';
        rightItem.dataset.match = item.id;
        rightItem.textContent = item.content;
        rightItem.style.backgroundColor = initialColor;

        rightColumn.appendChild(rightItem);
    });

    document.querySelectorAll('.item').forEach(attachEventListeners);
}

// Function to shuffle the array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to attach event listeners
function attachEventListeners(item) {
    item.addEventListener('mousedown', (e) => {
        startX = e.clientX;
        startY = e.clientY;
        isDrawing = true;
        startItem = item;
    });
}

document.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
    }
});

document.addEventListener('mouseup', (e) => {
    if (isDrawing) {
        endX = e.clientX;
        endY = e.clientY;
        isDrawing = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const endItem = document.elementFromPoint(endX, endY);
        if (endItem && endItem.classList.contains('item') && startItem.dataset.match === endItem.dataset.match) {
            // Retrieve the color based on the original index
            const index = randomSelection.findIndex(article => article.id === parseInt(startItem.dataset.match));
            const color = colors[index];
            startItem.style.backgroundColor = color;
            endItem.style.backgroundColor = color;
        } else {
            startItem.style.backgroundColor = 'lightcoral';
            showPopup('Incorrect match! Please try again.', startItem);
        }
    }
});

function showPopup(message, elementToClear) {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
        if (elementToClear) {
            elementToClear.style.backgroundColor = initialColor; // Reset to initial color
        }
    }, 3000);
}

// Initialize the page with random items
renderPage();
