// وظيفة البحث عن الكروت بناءً على النص المدخل
function searchCard() {
    const searchInput = document.querySelector('.search-input').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardTitle = card.querySelector('h3').innerText.toLowerCase();
        const cardAuthor = card.querySelector('p').innerText.toLowerCase();

        if (cardTitle.includes(searchInput) || cardAuthor.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

document.querySelector('.search-input').addEventListener('input', searchCard);
document.querySelector('.search-button').addEventListener('click', searchCard);
