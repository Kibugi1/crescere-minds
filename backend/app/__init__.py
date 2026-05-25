from flask import Flask, app
from flask_cors import CORS

from app.extensions.db import db

def create_app():

    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///crescere.db"

    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    CORS(app)

    from app.extensions.bcrypt import bcrypt
    db.init_app(app)
    bcrypt.init_app(app)

    from app.routes.auth_routes import auth_bp

    app.register_blueprint(auth_bp)



    return app