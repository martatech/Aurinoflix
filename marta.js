const moviesContainer = document.body;

    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => window.open(movie.link, '_blank');

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'X';
        deleteButton.onclick = (event) => {
            event.stopPropagation(); // Impede a abertura do filme ao clicar no botão de exclusão
            deleteMovie(card);
        };

        const img = document.createElement('img');
        img.src = movie.cover;
        img.alt = movie.title;

        const title = document.createElement('h3');
        title.textContent = movie.title;

        card.appendChild(deleteButton);
        card.appendChild(img);
        card.appendChild(title);

        return card;
    }

    function addMovie() {
        const title = document.getElementById('movieTitle').value;
        const cover = document.getElementById('movieCover').value;
        const link = document.getElementById('movieLink').value;

        if (title && cover && link) {
            const movie = { title, cover, link };
            const card = createMovieCard(movie);
            moviesContainer.appendChild(card);
            closeModal();
        } else {
            alert('Preencha todos os campos.');
        }
    }

    function deleteMovie(card) {
        if (confirm('Tem certeza de que deseja excluir este filme?')) {
            moviesContainer.removeChild(card);
        }
    }

    function openModal() {
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('addMovieModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('addMovieModal').style.display = 'none';
        clearForm();
    }

    function clearForm() {
        document.getElementById('movieTitle').value = '';
        document.getElementById('movieCover').value = '';
        document.getElementById('movieLink').value = '';
    }