const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
    fetch('superheroes.php')
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});