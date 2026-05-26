from flask import Blueprint, request
from flask_jwt_extended import (
    jwt_required,
    get_jwt
)
from flask import jsonify


from app.extensions.db import db
from app.models.blog import Blog


blog_bp = Blueprint(
    "blogs",
    __name__,
    url_prefix="/api/blogs"
)


@blog_bp.route("/create", methods=["POST"])
@jwt_required()
def create_blog():

    claims = get_jwt()

    # ADMIN ONLY
    if claims["role"] != "admin":

        return {
            "success": False,
            "message": "Admins only"
        }, 403

    data = request.get_json()

    title = data.get("title")
    content = data.get("content")
    category = data.get("category")
    image = data.get("image")

    new_blog = Blog(
        title=title,
        content=content,
        category=category,
        image=image,
        admin_id=1
    )

    db.session.add(new_blog)
    db.session.commit()

    return {
    "success": True,
    "message": "Blog created successfully",

    "blog": {
        "id": new_blog.id,
        "title": new_blog.title,
        "category": new_blog.category
    }
}, 201
    
# GET ALL BLOGS
@blog_bp.route("/", methods=["GET"])
def get_blogs():

    blogs = Blog.query.order_by(
        Blog.created_at.desc()
    ).all()

    all_blogs = []

    for blog in blogs:

        all_blogs.append({
            "id": blog.id,
            "title": blog.title,
            "content": blog.content,
            "category": blog.category,
            "image": blog.image,
            "created_at": blog.created_at,
            "admin_id": blog.admin_id
        })

    return jsonify(all_blogs), 200


# GET SINGLE BLOG
@blog_bp.route("/<int:id>", methods=["GET"])
def get_single_blog(id):

    blog = Blog.query.get(id)

    if not blog:

        return {
            "success": False,
            "message": "Blog not found"
        }, 404

    return jsonify({
        "id": blog.id,
        "title": blog.title,
        "content": blog.content,
        "category": blog.category,
        "image": blog.image,
        "created_at": blog.created_at,
        "admin_id": blog.admin_id
    }), 200


# EDIT BLOG
@blog_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
def update_blog(id):

    claims = get_jwt()

    # ADMIN ONLY
    if claims["role"] != "admin":

        return {
            "success": False,
            "message": "Admins only"
        }, 403

    blog = Blog.query.get(id)

    if not blog:

        return {
            "success": False,
            "message": "Blog not found"
        }, 404

    data = request.get_json()

    blog.title = data.get(
        "title",
        blog.title
    )

    blog.content = data.get(
        "content",
        blog.content
    )

    blog.category = data.get(
        "category",
        blog.category
    )

    blog.image = data.get(
        "image",
        blog.image
    )

    db.session.commit()

    return {
        "success": True,
        "message": "Blog updated successfully"
    }, 200


# DELETE BLOG
@blog_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_blog(id):

    claims = get_jwt()

    # ADMIN ONLY
    if claims["role"] != "admin":

        return {
            "success": False,
            "message": "Admins only"
        }, 403

    blog = Blog.query.get(id)

    if not blog:

        return {
            "success": False,
            "message": "Blog not found"
        }, 404

    db.session.delete(blog)

    db.session.commit()

    return {
        "success": True,
        "message": "Blog deleted successfully"
    }, 200