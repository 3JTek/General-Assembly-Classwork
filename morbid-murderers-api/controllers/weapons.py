from flask import Blueprint, request, jsonify
from models.weapon import Weapon, WeaponSchema

api = Blueprint('weapons', __name__)

weapons_schema = WeaponSchema(many=True)
weapon_schema = WeaponSchema()

@api.route('/weapons', methods=['GET'])
def index():
    weapons = Weapon.query.all()
    return weapons_schema.jsonify(weapons)

@api.route('/weapons/<int:weapon_id>', methods=['GET'])
def show(weapon_id):
    weapon = Weapon.query.get(weapon_id)
    return weapon_schema.jsonify(weapon)

@api.route('/weapons', methods=['POST'])
def create():

    weapon, errors = weapon_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    weapon.save()

    return weapon_schema.jsonify(weapon)

@api.route('/weapons/<int:weapon_id>', methods=['PUT'])
def update(weapon_id):

    weapon = Weapon.query.get(weapon_id)
    weapon, errors = weapon_schema.load(request.get_json(), instance=weapon)

    if errors:
        return jsonify(errors), 422

    weapon.save()

    return weapon_schema.jsonify(weapon)

@api.route('/weapons/<int:weapon_id>', methods=['DELETE'])
def delete(weapon_id):

    weapon = Weapon.query.get(weapon_id)

    weapon.remove()

    return '', 204
