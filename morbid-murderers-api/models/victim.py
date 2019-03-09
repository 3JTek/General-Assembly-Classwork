from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Victim(db.Model, BaseModel):

    __tablename__ = 'victims'

    name = db.Column(db.String(80), nullable=False)
    murderer_id = db.Column(db.Integer, db.ForeignKey('murderers.id'))

    murderer = db.relationship('Murderer', backref='victims')


class VictimSchema(ma.ModelSchema, BaseSchema):

    murderer = fields.Nested('MurdererSchema')

    class Meta:
        model = Victim
