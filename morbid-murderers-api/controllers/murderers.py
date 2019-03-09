from flask import Blueprint, request, jsonify, g
from models.murderer import Murderer, MurdererSchema
from lib.secure_route import secure_route

api = Blueprint('murderers', __name__)

murderers_schema = MurdererSchema(many=True, exclude=('victims', 'murderers'))
murderer_schema = MurdererSchema()

@api.route('/murderers', methods=['GET'])
def index():
    murderers = Murderer.query.all()
    return murderers_schema.jsonify(murderers)

@api.route('/murderers/<int:murderer_id>', methods=['GET'])
def show(murderer_id):
    murderer = Murderer.query.get(murderer_id)
    return murderer_schema.jsonify(murderer)

@api.route('/murderers', methods=['POST'])
@secure_route
def create():

    murderer, errors = murderer_schema.load(request.get_json())
    murderer.creator = g.current_user

    if errors:
        return jsonify(errors), 422

    murderer.save()

    return murderer_schema.jsonify(murderer)

@api.route('/murderers/<int:murderer_id>', methods=['PUT'])
@secure_route
def update(murderer_id):

    murderer = Murderer.query.get(murderer_id)

    if murderer.creator != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 401

    murderer, errors = murderer_schema.load(request.get_json(), instance=murderer)

    if errors:
        return jsonify(errors), 422

    murderer.save()

    return murderer_schema.jsonify(murderer)

@api.route('/murderers/<int:murderer_id>', methods=['DELETE'])
@secure_route
def delete(murderer_id):

    murderer = Murderer.query.get(murderer_id)

    if murderer.creator != g.current_user:
        return jsonify({'message': 'Unauthorized'}), 401

    murderer.remove()

    return '', 204
