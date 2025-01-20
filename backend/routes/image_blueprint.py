from flask import Blueprint, request, jsonify
from PIL import Image
from http import HTTPStatus
from business.image_utils import valid_file
import io

image_blueprint = Blueprint('image', __name__)

@image_blueprint.route('/', methods=["POST"])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "No photo provided!"}), HTTPStatus.BAD_REQUEST
    file = request.files["image"]
       
    if file.filename == "" or not valid_file(file.filename):
        return {"error": "Invalid file type"}, HTTPStatus.BAD_REQUEST

    try:
        image = Image.open(io.BytesIO(file.read()))
        image.verify()
        result = {
            "message": "Image received!",
            "format": image.format,
            "size": image.size
        }
        print("RESULT: ", result)
        return jsonify(result), HTTPStatus.OK
    
    except Exception as e:
        return jsonify({"error": str(e)}), HTTPStatus.INTERNAL_SERVER_ERROR