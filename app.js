document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    const resultDiv = document.getElementById('result');

    fetch(`superheroes.php?query=${encodeURIComponent(query)}`)
        .then(response => response.text())
        .then(data => {
            resultDiv.innerHTML = data;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            resultDiv.innerHTML = "<p style='color: red;'>An error occurred while processing your request.</p>";
        });
});