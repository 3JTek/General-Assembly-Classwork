from flask import Blueprint, request, jsonify
from models.victim import Victim, VictimSchema

api = Blueprint('victims', __name__)

victims_schema = VictimSchema(many=True)
victim_schema = VictimSchema()

@api.route('/victims', methods=['GET'])
def index():
    victims = Victim.query.all()
    return victims_schema.jsonify(victims)

@api.route('/victims/<int:victim_id>', methods=['GET'])
def show(victim_id):
    victim = Victim.query.get(victim_id)
    return victim_schema.jsonify(victim)

@api.route('/victims', methods=['POST'])
def create():

    victim, errors = victim_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    victim.save()

    return victim_schema.jsonify(victim)

@api.route('/victims/<int:victim_id>', methods=['PUT'])
def update(victim_id):

    victim = Victim.query.get(victim_id)
    victim, errors = victim_schema.load(request.get_json(), instance=victim)

    if errors:
        return jsonify(errors), 422

    victim.save()

    return victim_schema.jsonify(victim)

@api.route('/victims/<int:victim_id>', methods=['DELETE'])
def delete(victim_id):

    victim = Victim.query.get(victim_id)

    victim.remove()

    return '', 204
