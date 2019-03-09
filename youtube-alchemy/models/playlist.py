from app import db, ma
from .user import User, UserSchema
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Playlist(db.Model, BaseModel):

    __tablename__ = 'playlists'

    title = db.Column(db.String(40), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='playlists')


class PlaylistSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', exclude=('email', 'videos', 'playlists'))
    videos = fields.Nested('VideoSchema', exclude=('playlists', 'user', ), many=True)

    class Meta:
        model = Playlist
