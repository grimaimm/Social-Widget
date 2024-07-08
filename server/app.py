from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import json, os

app = Flask(__name__, static_url_path='', static_folder='../client/build/')
CORS(app)

def load_links():
    with open('links.json') as f:
        return json.load(f)

@app.route('/api/links', methods=['GET'])
def get_links():
    links = load_links()
    return jsonify(links)
  
@app.route("/", defaults={'path':''})
@app.route('/<path:path>')
def serve(path):
    if path != '' and os.path.exists(os.path.join(app.static_folder, path)):
        # Jika path ada dan merupakan file, kirim file tersebut
        return send_from_directory(app.static_folder, path)
    else:
        # Jika path kosong atau tidak ada, kirim index.html sebagai default
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
    
