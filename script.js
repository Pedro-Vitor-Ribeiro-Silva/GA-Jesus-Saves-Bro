const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const playButton = card.querySelector('.play-button');
    const spotifyLink = card.dataset.spotifyLink; // Obter link do Spotify do card

    playButton.addEventListener('click', () => {
        if (spotifyLink) {
            // Abra o link do Spotify em uma nova aba
            window.open(spotifyLink, '_blank');
        } else {
            // Exiba uma mensagem de erro
            console.error('Link do Spotify não encontrado.');
        }
    });
});
