from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    jwt_required,
    get_jwt
)

from app.extensions.db import db

from app.models.comment import Comment
from app.models.blog import Blog


comment_bp = Blueprint(
    "comments",
    __name__,
    url_prefix="/api/comments"
)


# CREATE COMMENT
@comment_bp.route("/create", methods=["POST"])
def create_comment():

    data = request.get_json()

    message = data.get("message")
    user_name = data.get("user_name")
    blog_id = data.get("blog_id")

    # CHECK BLOG EXISTS
    blog = Blog.query.get(blog_id)

    if not blog:

        return {
            "success": False,
            "message": "Blog not found"
        }, 404

    new_comment = Comment(
        message=message,
        user_name=user_name,
        blog_id=blog_id
    )

    db.session.add(new_comment)

    db.session.commit()

    return {
        "success": True,
        "message": "Comment added successfully"
    }, 201


# GET BLOG COMMENTS
@comment_bp.route("/blog/<int:blog_id>", methods=["GET"])
def get_blog_comments(blog_id):

    comments = Comment.query.filter_by(
        blog_id=blog_id
    ).order_by(
        Comment.created_at.desc()
    ).all()

    all_comments = []

    for comment in comments:

        all_comments.append({
            "id": comment.id,
            "message": comment.message,
            "user_name": comment.user_name,
            "created_at": comment.created_at
        })

    return jsonify(all_comments), 200


# DELETE COMMENT
@comment_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_comment(id):

    claims = get_jwt()

    # ADMIN ONLY
    if claims["role"] != "admin":

        return {
            "success": False,
            "message": "Admins only"
        }, 403

    comment = Comment.query.get(id)

    if not comment:

        return {
            "success": False,
            "message": "Comment not found"
        }, 404

    db.session.delete(comment)

    db.session.commit()

    return {
        "success": True,
        "message": "Comment deleted successfully"
    }, 200