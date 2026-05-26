from flask import Flask, app
from flask_cors import CORS

from datetime import timedelta
from app.extensions.db import db
from app.extensions.bcrypt import bcrypt
from app.extensions.jwt import jwt

def create_app():

    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///crescere.db"

    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    app.config["JWT_SECRET_KEY"] = "jwt-super-secret-key"
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)

    CORS(app)

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)

    from app.routes.auth_routes import auth_bp
    from app.routes.blog_routes  import blog_bp
    from app.routes.comment_routes import comment_bp
    from app.routes.contact_routes import contact_bp
     
    app.register_blueprint(auth_bp)
    app.register_blueprint(blog_bp)
    app.register_blueprint(comment_bp)
    app.register_blueprint(contact_bp)
    return app