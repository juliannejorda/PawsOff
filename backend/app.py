from flask import Flask
from dotenv import load_dotenv
from routes.food_blueprint import food_blueprint
from routes.image_blueprint import image_blueprint

load_dotenv()
app = Flask(__name__)
app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload size
@app.route('/')
def home():
    return """<h1>Hello, Flask!!!! We have two endpoints</h1> <ul><li>/api/foods</li> <li>/api/images</li><ul/>"""

app.register_blueprint(food_blueprint, url_prefix='/api/foods')
app.register_blueprint(image_blueprint, url_prefix='/api/images')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
