const adCards = document.querySelectorAll(".ad-card");
        
document.getElementById('search-bar').addEventListener('input', function() {
const searchQuery = this.value.toLowerCase();
const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchQuery)) {
        card.style.display = 'flex';
    } else {
        card.style.display = 'none';
    }
});

adCards.forEach(ad => {
    ad.style.display = searchQuery === '' ? 'block' : 'none';
});
});