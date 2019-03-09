from flask import Blueprint
from models.playlist import Playlist, PlaylistSchema

playlist_schema = PlaylistSchema()
playlists_schema = PlaylistSchema(many=True)

api = Blueprint('playlists', __name__)

@api.route('/playlists', methods=['GET'])
def index():
    playlists = Playlist.query.all()
    return playlists_schema.jsonify(playlists)

@api.route('/playlists/<int:id>', methods=['GET'])
def show(id):
    playlist = Playlist.query.get(id)
    return playlist_schema.jsonify(playlist)
