from app import db, ma
from marshmallow import fields, post_load
from .base import BaseModel, BaseSchema

class Weapon(db.Model, BaseModel):

    __tablename__ = 'weapons'

    name = db.Column(db.String(80), nullable=False)


class WeaponSchema(ma.ModelSchema, BaseSchema):

    murderers = fields.Nested('MurdererSchema', many=True, exclude=('weapons', 'victims'))

    class Meta:
        model = Weapon
