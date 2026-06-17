from flask import Blueprint, request
from flask_jwt_extended import (
    jwt_required,
    get_jwt,
    get_jwt_identity
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

    title = request.form.get("title")
    excerpt = request.form.get("excerpt")
    content = request.form.get("content")
    category = request.form.get("category")
    status = request.form.get("status")
    image = request.files.get("image")

    new_blog = Blog(
        title=title,
        excerpt=excerpt,
        content=content,
        category=category,
        status=status,
        image=None,
        admin_id=get_jwt_identity(),
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

    blogs = Blog.query.order_by(Blog.status == "published").order_by(
        Blog.created_at.desc()
    ).all()

    all_blogs = []

    for blog in blogs:

        all_blogs.append({
            "id": blog.id,
            "title": blog.title,
            "excerpt": blog.excerpt,
            "content": blog.content,
            "category": blog.category,
            "image": blog.image,
            "created_at": blog.created_at.strftime("%Y-%m-%d %H:%M:%S"),
            "status": blog.status,
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
        "excerpt": blog.excerpt,
        "image": blog.image,
        "created_at": blog.created_at.strftime("%Y-%m-%d %H:%M:%S"),
        "status": blog.status,
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

    title = request.form.get("title")
    excerpt = request.form.get("excerpt")
    content = request.form.get("content")
    category = request.form.get("category")
    status = request.form.get("status")
    image = request.files.get("image")
    blog.title = title
    blog.excerpt = excerpt
    blog.content = content
    blog.category = category
    blog.status = status
    blog.image = image
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