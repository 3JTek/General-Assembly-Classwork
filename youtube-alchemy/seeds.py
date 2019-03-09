from app import app, db
from models.user import User
from models.video import Video
from models.playlist import Playlist

with app.app_context():
    db.drop_all()
    db.create_all()

    jjbenson85 = User(username='jjbenson85', email='jjbenson85@gmail.com')
    jjbenson85.save()

    things_to_do = Video(title="Things to do in London's Hottest borough", filename='croydon.mov', user=jjbenson85)
    things_to_do.save()

    croydon = Playlist(title='Croydon', user=jjbenson85, videos=[things_to_do])
    croydon.save()
