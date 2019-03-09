from app import db, ma
from .user import User, UserSchema
from .playlist import Playlist
from marshmallow import fields
from .base import BaseModel, BaseSchema

playlists_videos = db.Table('playlists_videos',
    db.Column('playlist_id', db.Integer, db.ForeignKey('playlists.id'), primary_key=True),
    db.Column('video_id', db.Integer, db.ForeignKey('videos.id'), primary_key=True)
)

class Video(db.Model, BaseModel):

    __tablename__ = 'videos'

    title = db.Column(db.String(40), nullable=False)
    filename = db.Column(db.String(80), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', backref='videos')
    playlists = db.relationship('Playlist', secondary=playlists_videos, backref='videos')


class VideoSchema(ma.ModelSchema, BaseSchema):

    user = fields.Nested('UserSchema', exclude=('email', 'playlists', 'videos'))

    class Meta:
        model = Video

        exclude=('playlists', )
