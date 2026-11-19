const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const articles = [
    { id: 1, title: "Right to Education", content: "Free and compulsory education for children" },
    { id: 2, title: "Education Provides", content: "Skills and knowledge for better opportunities" },
    { id: 3, title: "Right to Education Ensures", content: "No child is left behind" },
    { id: 4, title: "Education Helps", content: "Eradicate illiteracy" },
    { id: 5, title: "Right to Education Benefits", content: "Promotes social and economic development" },
    { id: 6, title: "Equal Access to Education", content: "Opportunities for all children regardless of background" },
    { id: 7, title: "Improves Literacy Rates", content: "More children able to read and write" },
    { id: 8, title: "Supports Lifelong Learning", content: "Fosters a culture of continuous education" },
    { id: 9, title: "Reduces Dropout Rates", content: "Keeps children in school until completion" },
    { id: 10, title: "Empowers Marginalized Communities", content: "Education for underprivileged and minority groups" },
    { id: 11, title: "Quality Education", content: "High standards in teaching and learning" },
    { id: 12, title: "Inclusive Education", content: "Education accessible to all children, including those with disabilities" },
    { id: 13, title: "Safe Learning Environment", content: "Ensures a secure and supportive school atmosphere" },
    { id: 14, title: "Trained Teachers", content: "Qualified and competent educators" },
    { id: 15, title: "Educational Resources", content: "Adequate textbooks, materials, and facilities" },
    { id: 16, title: "Community Involvement", content: "Engagement of parents and community in education" },
    { id: 17, title: "Early Childhood Education", content: "Foundation learning for young children" },
    { id: 18, title: "Gender Parity", content: "Equal educational opportunities for boys and girls" },
    { id: 19, title: "Continuous Assessment", content: "Regular evaluation of student performance" },
    { id: 20, title: "Scholarship Programs", content: "Financial aid for deserving students" }
];

const colors = [ '#ff5733', '#33ff57', '#3357ff', '#ff33a5', '#a533ff', '#ff9133', '#33fff5', '#33ffb8', '#ffd433', '#ff3333' 
];
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

        leftColumn.appendChild(leftItem);
    });

    const shuffledItems = shuffle([...randomSelection]);

    shuffledItems.forEach(item => {
        const rightItem = document.createElement('div');
        rightItem.className = 'item';
        rightItem.dataset.match = item.id;
        rightItem.textContent = item.content;

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
            // No color change on correct match
            startItem.style.backgroundColor = colors[randomSelection.findIndex(article => article.id === parseInt(startItem.dataset.match))]; 
            endItem.style.backgroundColor = colors[randomSelection.findIndex(article => article.id === parseInt(endItem.dataset.match))];
        } else {
            // No color change on incorrect match
            startItem.style.backgroundColor = 'defaultColor'; 
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
