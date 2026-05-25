from flask import Blueprint, jsonify, request
from app.models.admin_user import AdminUser
from flask_jwt_extended import create_access_token, jwt_required
from flask_jwt_extended import (
    get_jwt_identity,
    get_jwt
)

auth_bp = Blueprint(
    "auth",
    __name__,
    url_prefix="/api/auth"
)

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")

    password = data.get("password")

    # FIND ADMIN

    admin = AdminUser.query.filter_by(
        email=email
    ).first()

    # CHECK IF ADMIN EXISTS

    if not admin:

        return {
            "success": False,
            "message": "Invalid email"
        }, 401

    # CHECK PASSWORD

    if not admin.check_password(password):

        return {
            "success": False,
            "message": "Invalid password"
        }, 401


    # CREATE JWT TOKEN
    access_token = create_access_token(
       identity=str(admin.id),
  additional_claims={
            "role": "admin"
        }
    )
    
    
    # LOGIN SUCCESS

    return {
        "success": True,
        "message": "Login successful",
        "token": access_token,
        
        "admin": {
            "id": admin.id,
            "name": admin.name,
            "email": admin.email
        }
    }, 200

@auth_bp.route("/protected", methods=["GET"])
@jwt_required()
def protected():

    return jsonify({
        "message": "Access granted"
    }), 200
    
@auth_bp.route("/me", methods=["GET"])
@jwt_required()
def me():

    current_user_id = get_jwt_identity()
    claims = get_jwt()

    return jsonify({
        "id": current_user_id,
        "role": claims["role"]
        
    }), 200
    
@auth_bp.route("/admin-dashboard", methods=["GET"])
@jwt_required()
def admin_dashboard():

    claims = get_jwt()

    if claims["role"] != "admin":

        return {
            "success": False,
            "message": "Admins only"
        }, 403

    return {
        "success": True,
        "message": "Welcome Admin"
    }, 200