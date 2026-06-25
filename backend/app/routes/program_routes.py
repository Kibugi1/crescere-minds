from flask import Blueprint, request, jsonify

from flask_jwt_extended import (
    jwt_required,
    get_jwt
)

from app.extensions.db import db

from app.models.program import Program

import os
from flask import (
    Blueprint,
    request,
    jsonify,
    current_app
)

from werkzeug.utils import (
    secure_filename
)


program_bp = Blueprint(
    "programs",
    __name__,
    url_prefix="/api/programs"
)


# CREATE PROGRAM
@program_bp.route("/create", methods=["POST"])
@jwt_required()
def create_program():

    claims = get_jwt()

    if claims["role"] != "admin":

        return {
            "success": False,
            "message": "Admins only"
        }, 403

    title = request.form.get("title")
    excerpt = request.form.get("excerpt")
    description = request.form.get("description")
    category = request.form.get("category")
    status = request.form.get("status")
    image = request.files.get("image")
    
    image_filename = None

    if image:
        image_filename = secure_filename(
            image.filename
        )

        image.save(

            os.path.join(

                current_app.config[
                    "UPLOAD_FOLDER"
                ],

                image_filename
            )
        )

    new_program = Program(

    title=title,

    excerpt=excerpt,

    description=description,

    category=category,

    image=image_filename,

    status=status,

    admin_id=1
)

    db.session.add(new_program)

    db.session.commit()

    return {

    "success": True,

    "message": "Program created successfully",

    "program": {

        "id": new_program.id,

        "title": new_program.title,

        "category": new_program.category,
    }

        }, 201

# GET ALL PROGRAMS
@program_bp.route("/", methods=["GET"])
def get_programs():

    programs = Program.query.order_by(
        Program.created_at.desc()
    ).all()

    all_programs = []

    for program in programs:

        all_programs.append({
            "id": program.id,
            "title": program.title,
            "excerpt": program.excerpt,
            "description": program.description,
            "category": program.category,
            "image": program.image,
            "status": program.status,
            "created_at": program.created_at
        })

    return jsonify(all_programs), 200


# GET SINGLE PROGRAM
@program_bp.route("/<int:id>", methods=["GET"])
def get_single_program(id):

    program = Program.query.get(id)

    if not program:

        return {
            "success": False,
            "message": "Program not found"
        }, 404

    return jsonify({
        "id": program.id,
        "title": program.title,
        "description": program.description,
        "category": program.category,
        "image": program.image,
        "is_active": program.is_active,
        "created_at": program.created_at
    }), 200


# UPDATE PROGRAM
@program_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
def update_program(id):

    claims = get_jwt()

    if claims["role"] != "admin":

        return {
            "success": False,
            "message": "Admins only"
        }, 403

    program = Program.query.get(id)

    if not program:

        return {
            "success": False,
            "message": "Program not found"
        }, 404

    data = request.get_json()

    program.title = data.get(
        "title",
        program.title
    )

    program.description = data.get(
        "description",
        program.description
    )

    program.category = data.get(
        "category",
        program.category
    )

    program.image = data.get(
        "image",
        program.image
    )

    program.is_active = data.get(
        "is_active",
        program.is_active
    )

    db.session.commit()

    return {
        "success": True,
        "message": "Program updated successfully"
    }, 200


# DELETE PROGRAM
@program_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_program(id):

    claims = get_jwt()

    if claims["role"] != "admin":

        return {
            "success": False,
            "message": "Admins only"
        }, 403

    program = Program.query.get(id)

    if not program:

        return {
            "success": False,
            "message": "Program not found"
        }, 404

    db.session.delete(program)

    db.session.commit()

    return {
        "success": True,
        "message": "Program deleted successfully"
    }, 200