from app.extensions.db import db
from datetime import datetime, timezone


class Comment(db.Model):

    __tablename__ = "comments"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    message = db.Column(
        db.Text,
        nullable=False
    )

    user_name = db.Column(
        db.String(100),
        nullable=False
    )

    created_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc)
    )

    # FOREIGN KEY
    blog_id = db.Column(
        db.Integer,
        db.ForeignKey("blogs.id"),
        nullable=False
    )