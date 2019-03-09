from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://localhost:5432/youtube-alchemy'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

from config import routes
