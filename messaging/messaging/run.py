from flask import Flask
from messaging.app.routes import sms

app = Flask(__name__)
app.register_blueprint(sms.blueprint)

if __name__ == "__main__":
    app.run(debug=True)
