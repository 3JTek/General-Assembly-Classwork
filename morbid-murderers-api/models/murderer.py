from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

murderers_weapons = db.Table(
    'murderers_weapons',
    db.Column('murderer_id', db.Integer, db.ForeignKey('murderers.id')),
    db.Column('weapon_id', db.Integer, db.ForeignKey('weapons.id'))
)

likes = db.Table(
    'likes',
    db.Column('murderer_id', db.Integer, db.ForeignKey('murderers.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
)

class Murderer(db.Model, BaseModel):

    __tablename__ = 'murderers'

    name = db.Column(db.String(80), nullable=False)
    weapons = db.relationship(
        'Weapon',
        secondary=murderers_weapons,
        backref='murderers'
    )
    liked_by = db.relationship(
        'User',
        secondary=likes,
        backref='likes'
    )
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship('User', backref='created_murderers')


class MurdererSchema(ma.ModelSchema, BaseSchema):

    victims = fields.Nested('VictimSchema', many=True, exclude=('murderer',))
    weapons = fields.Nested('WeaponSchema', many=True, exclude=('murderer',))
    creator = fields.Nested('UserSchema', only=('id', 'username'))
    liked_by = fields.Nested('UserSchema', many=True, only=('id', 'username'))

    class Meta:
        model = Murderer
