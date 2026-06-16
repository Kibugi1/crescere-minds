from app.extensions.db import db
from datetime import datetime, timezone 


class Blog(db.Model):

    __tablename__ = "blogs"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    title = db.Column(
        db.String(255),
        nullable=False
    )
    
    excerpt = db.Column(
        db.Text,
        nullable=False
    )

    content = db.Column(
        db.Text,
        nullable=False
    )

    category = db.Column(
        db.String(100),
        nullable=False
    )

    image = db.Column(
        db.String(500),
        nullable=True
    )

    created_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc)
    )
    
    status = db.Column(
        db.String(50),
        nullable=False,
        default="draft"
    )

    admin_id = db.Column(
        db.Integer,
        nullable=False
    )