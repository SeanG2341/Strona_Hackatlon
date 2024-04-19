document.addEventListener("DOMContentLoaded", function(){
    // Pobierz elementy DOM kamery
    const imageElement = document.getElementById('image');
    const feedbackElement = document.getElementById('feedback');

    // Wysyłanie żądania do serwera w celu detekcji ognia
    fetch('/detect_fire', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: 'obraz.jpg'}) // Obraz do detekcji ognia
    })
    .then(response => response.json())
    .then(data => {
        // Sprawdź, czy ognia został wykryty
        if (data.fire_detected) {
            // Ustaw obraz, gdy ogień został wykryty
            imageElement.src = 'obraz_ognia.jpg';
            // Wyświetl informację o wykryciu ognia
            feedbackElement.innerText = 'Ogień został wykryty!';
        } else {
            // Wyświetl informację o braku wykrycia ognia
            feedbackElement.innerText = 'Ognia nie wykryto';
        }
    })
    .catch(error =>
        console.error('Błąd: ', error));
});
