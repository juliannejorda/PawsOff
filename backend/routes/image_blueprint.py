from flask import Blueprint, json, Response

image_blueprint = Blueprint('image', __name__)


@image_blueprint.route('/', methods = ["POST"])
def get_images():
    mock_image = {
        "file_type": "jpg",
        "width": 20,
        "length": 20
    }
    return Response(json.dumps(mock_image), status=200, content_type='application/json')
