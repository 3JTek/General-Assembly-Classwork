from app import app
from controllers import videos, users, playlists

app.register_blueprint(videos.api, url_prefix='/api')
app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(playlists.api, url_prefix='/api')
