from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class User(db.Model, BaseModel):

    __tablename__ = 'users'

    username = db.Column(db.String(40), nullable=False)
    email = db.Column(db.String(80), nullable=False)


class UserSchema(ma.ModelSchema, BaseSchema):

    videos = fields.Nested('VideoSchema', many=True, exclude=('user', ))
    playlists = fields.Nested('PlaylistSchema', many=True, exclude=('user', 'videos'))

    class Meta:
        model = User
