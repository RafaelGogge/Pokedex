document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('pokemon-title');
    const audio = document.getElementById('pokemon-audio');
    const playButton = document.getElementById('play-music');

    // Adiciona evento de clique ao botão para tocar a música e abrir uma nova página
    playButton.addEventListener('click', () => {
        audio.play().catch(error => {
            console.error("Playback prevented:", error);
        });
        window.open('https://www.instagram.com/rafael.gogge?igsh=MTAya2Z3ZHNwNmg0eA==', '_blank');
    });

    title.addEventListener('mouseover', () => {
        if (audio.paused) {
            audio.play().catch(error => {
                console.error("Playback prevented:", error);
            });
        }
    });
});
