const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const articles = [
    { id: 1, title: "Executive Power", content: "Power to enforce laws" },
    { id: 2, title: "Legislative Power", content: "Power to make laws" },
    { id: 3, title: "Judicial Power", content: "Power to interpret laws" },
    { id: 4, title: "Checks and Balances", content: "Each branch can limit the powers of the other branches" },
    { id: 5, title: "Federalism", content: "Division of power between central and state governments" },
    { id: 6, title: "Separation of Church and State", content: "Religious institutions are separate from government" },
    { id: 7, title: "Bicameral Legislature", content: "A legislative body with two chambers" },
    { id: 8, title: "Rule of Law", content: "Everyone is subject to the law" },
    { id: 9, title: "Veto Power", content: "Executive's ability to reject a bill" },
    { id: 10, title: "Impeachment", content: "Process to remove officials from office" },
    { id: 11, title: "Judicial Review", content: "Courts can declare laws unconstitutional" },
    { id: 12, title: "Legislative Oversight", content: "Legislators monitor and supervise government agencies" },
    { id: 13, title: "Executive Orders", content: "Directives issued by the executive branch" },
    { id: 14, title: "Budget Control", content: "Legislature controls government spending" },
    { id: 15, title: "Appointment Power", content: "Executive appoints judges and officials" },
    { id: 16, title: "Amendment Process", content: "Changing the constitution" },
    { id: 17, title: "Term Limits", content: "Limits on how long officials can hold office" },
    { id: 18, title: "Recall Election", content: "Process to remove elected officials before their term ends" },
    { id: 19, title: "Pardon Power", content: "Executive can forgive offenses" },
    { id: 20, title: "Sovereign Immunity", content: "Government cannot be sued without its consent" }
];

const colors = ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffb3e6', '#c1e1c5', '#f4a582', '#b3b3cc', '#ffd966'];
const initialColor = 'blue';  // Initial color for all items

function getRandomSelection(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

const numItems = 10;  // Number of items to select randomly
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
