from app import app
from controllers import auth, weapons, murderers, victims

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(weapons.api, url_prefix='/api')
app.register_blueprint(murderers.api, url_prefix='/api')
app.register_blueprint(victims.api, url_prefix='/api')
