import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "super-secret-key")

    JWT_SECRET_KEY = os.getenv(
        "JWT_SECRET_KEY",
        "jwt-super-secret-key"
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False