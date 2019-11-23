from flask import Flask
from app.routes import sms

app = Flask(__name__)
app.register_blueprint(sms.blueprint)
