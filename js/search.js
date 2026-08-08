const searchInput = document.querySelector('#search-input');
const items = Array.from(document.querySelectorAll('.item'));

function filterItems(query) {
    const q = query.trim().toLowerCase();

    // If empty, show everything
    if (!q) {
        items.forEach(item => (item.style.display = ''));
        return;
    }

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(q) ? '' : 'none';
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        filterItems(e.target.value);
    });
}
