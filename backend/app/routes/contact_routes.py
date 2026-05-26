from flask import Blueprint, request, jsonify

from flask_jwt_extended import (
    jwt_required,
    get_jwt
)

from app.extensions.db import db

from app.models.contact_message import ContactMessage


contact_bp = Blueprint(
    "contact",
    __name__,
    url_prefix="/api/contact"
)


# SEND CONTACT MESSAGE
@contact_bp.route("/", methods=["POST"])
def send_message():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    subject = data.get("subject")
    message = data.get("message")

    new_message = ContactMessage(
        name=name,
        email=email,
        subject=subject,
        message=message
    )

    db.session.add(new_message)

    db.session.commit()

    return {
        "success": True,
        "message": "Message sent successfully"
    }, 201


# GET ALL MESSAGES (ADMIN)
@contact_bp.route("/messages", methods=["GET"])
@jwt_required()
def get_messages():

    claims = get_jwt()

    # ADMIN ONLY
    if claims["role"] != "admin":

        return {
            "success": False,
            "message": "Admins only"
        }, 403

    messages = ContactMessage.query.order_by(
        ContactMessage.created_at.desc()
    ).all()

    all_messages = []

    for message in messages:

        all_messages.append({
            "id": message.id,
            "name": message.name,
            "email": message.email,
            "subject": message.subject,
            "message": message.message,
            "is_read": message.is_read,
            "created_at": message.created_at
        })

    return jsonify(all_messages), 200

# MARK MESSAGE AS READ
@contact_bp.route("/<int:id>/read", methods=["PUT"])
@jwt_required()
def mark_as_read(id):

    claims = get_jwt()

    # ADMIN ONLY
    if claims["role"] != "admin":

        return {
            "success": False,
            "message": "Admins only"
        }, 403

    message = ContactMessage.query.get(id)

    if not message:

        return {
            "success": False,
            "message": "Message not found"
        }, 404

    message.is_read = True

    db.session.commit()

    return {
        "success": True,
        "message": "Message marked as read"
    }, 200