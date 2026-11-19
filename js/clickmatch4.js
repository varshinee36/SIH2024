const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const articles = [
    { id: 1, title: "Equality Before the Law", content: "Equal treatment by law" },
    { id: 2, title: "Prohibition of Discrimination", content: "No discrimination on religion, race, caste, sex, or place of birth" },
    { id: 3, title: "Equality of Opportunity in Public Employment", content: "Equal chance for all citizens in public jobs" },
    { id: 4, title: "Abolition of Untouchability", content: "Untouchability is forbidden" },
    { id: 5, title: "Abolition of Titles", content: "Prohibits state from granting titles" },
    { id: 6, title: "Non-Discrimination in Education", content: "No bias in educational institutions" },
    { id: 7, title: "Gender Equality", content: "No gender-based discrimination" },
    { id: 8, title: "Caste Equality", content: "No discrimination based on caste" },
    { id: 9, title: "Religious Freedom", content: "Equal respect and protection for all religions" },
    { id: 10, title: "Right to Fair Treatment", content: "Equal access and treatment in public spaces" },
    { id: 11, title: "Economic Equality", content: "Fair distribution of wealth and resources" },
    { id: 12, title: "Social Equality", content: "Equal status within society" },
    { id: 13, title: "Political Equality", content: "Equal participation in political processes" },
    { id: 14, title: "Right to Fair Trial", content: "Impartial and just legal proceedings" },
    { id: 15, title: "Right to Non-Discrimination", content: "Protection against unjust treatment" },
    { id: 16, title: "Right to Property", content: "Ownership rights for all citizens" },
    { id: 17, title: "Equal Pay for Equal Work", content: "Same pay for the same work, regardless of gender or other factors" },
    { id: 18, title: "Access to Public Services", content: "Equal access to government services and facilities" },
    { id: 19, title: "Right to Marry", content: "Freedom to choose a life partner" },
    { id: 20, title: "Right to Vote", content: "Equal voting rights for all adults" }
];

const colors = ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffb3e6', '#c1e1c5', '#f4a582', '#b3b3cc', '#ffd966'];
const initialColor = 'blue'; // Initial color for all items

function getRandomSelection(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

const numItems = 10; // Number of items to select randomly
const randomSelection = getRandomSelection(articles, numItems);

function renderPage() {
    const leftColumn = document.getElementById('left-column');
    const rightColumn = document.getElementById('right-column');
    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';

    randomSelection.forEach(item => {
        const leftItem = document.createElement('div');
        leftItem.className = 'item';
        leftItem.dataset.match = item.id;
        leftItem.id = `match-${item.id}`;
        leftItem.textContent = item.title;
        leftItem.style.backgroundColor = initialColor;

        leftColumn.appendChild(leftItem);
    });

    const shuffledItems = shuffle([...randomSelection]);

    shuffledItems.forEach(item => {
        const rightItem = document.createElement('div');
        rightItem.className = 'item';
        rightItem.dataset.match = item.id;
        rightItem.textContent = item.content;
        rightItem.style.backgroundColor = initialColor;

        rightColumn.appendChild(rightItem);
    });

    document.querySelectorAll('.item').forEach(attachEventListeners);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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
            // Change color to corresponding one in the array on correct match
            const index = randomSelection.findIndex(article => article.id === parseInt(startItem.dataset.match));
            const color = colors[index];
            startItem.style.backgroundColor = color;
            endItem.style.backgroundColor = color;
        } else {
            // Change color to light coral on incorrect match
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

// Initialize the page with the first 10 items
renderPage();
