from flask import Blueprint
from models.video import Video, VideoSchema

video_schema = VideoSchema()
videos_schema = VideoSchema(many=True)

api = Blueprint('videos', __name__)

@api.route('/videos', methods=['GET'])
def index():
    videos = Video.query.all()
    return videos_schema.jsonify(videos)

@api.route('/videos/<int:id>', methods=['GET'])
def show(id):
    video = Video.query.get(id)
    return video_schema.jsonify(video)
