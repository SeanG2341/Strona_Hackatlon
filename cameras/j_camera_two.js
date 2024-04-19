document.addEventListener("DOMContentLoaded", function(){
    fetch('/detect_fire', {
        method: 'POST',
        headers: {
            'Content-Type':
    'application/json'
        },
        body: JSON.stringify({ image: 'obraz.jpg'})
    })
    .then(response=> response.json())
    .then(data => {
        if (data.fire_detected) {
            document.getElementById('image').src = 'obraz_ognia.jpg'
            document.getElementById('feedback').innerText = 'Ogień zostął wykryty!';
        } else {
            document.getElementById('feedback').innerText = 'Ognia nie wykryto';
        }
    })
    .catch(error =>
        console.error('Błąd: ', error));
    });