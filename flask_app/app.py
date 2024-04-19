from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/detect_fire', methods=['POST'])
def detect_fire():
    # Logika detekcji ognia za pomocą YOLO
    # Przykładowy kod:
    fire_detected = True

    return jsonify({'fire_detected': fire_detected})

if __name__ == '__main__':
    app.run(debug=True)
