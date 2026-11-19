document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.help-section');

    sections.forEach(section => {
        const header = section.querySelector('h2');
        header.addEventListener('click', () => {
            const content = section.querySelector('ul');
            const isVisible = content.style.display === 'block';
            content.style.display = isVisible ? 'none' : 'block';
            header.classList.toggle('active', !isVisible);
        });
    });
});
