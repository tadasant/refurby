from flask import Flask
from messaging.app.routes import sms

# SECRET_KEY = 'a secret key'
app = Flask(__name__)
app.config["SECRET_KEY"] = "OCML3BRawWEUeaxcuKHLpw"
# app.config.from_object(__name__)
app.register_blueprint(sms.blueprint)

if __name__ == "__main__":
    app.run(debug=True)
