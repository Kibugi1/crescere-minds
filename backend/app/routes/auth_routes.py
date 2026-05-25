from flask import Blueprint

auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/api/auth"
)

@auth_bp.route("/login")
def login():

    return {
        "message":
        "Auth route working"
    }