from flask import Blueprint, request, jsonify
from PIL import Image
from http import HTTPStatus
import io

image_blueprint = Blueprint('image', __name__)

@image_blueprint.route('/', methods=["POST"])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No photo provided!"}), HTTPStatus.BAD_REQUEST
    
    file = request.files["image"]

    try:
        image = Image.open(io.BytesIO(file.read()))
        image.verify()
        
        return jsonify({"message": "Image received!", "size": image.size}), HTTPStatus.OK
    
    except Exception as e:
        return jsonify({"error": str(e)}), HTTPStatus.INTERNAL_SERVER_ERROR

@image_blueprint.route('/', methods=["GET"])
def get_image():
    return "HI", HTTPStatus.OK
