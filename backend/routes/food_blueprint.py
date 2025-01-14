from flask import Blueprint, json, Response

food_blueprint = Blueprint('foods', __name__)

@food_blueprint.route('/')
def get_foods():
    mock_data = [
        {"name": "Apple", "amt": 2},
        {"name": "Mango", "amt": 22}
    ]
    return Response(json.dumps(mock_data), status=200, content_type='application/json')
