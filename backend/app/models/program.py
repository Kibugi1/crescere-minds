from app.extensions.db import db
from datetime import datetime, timezone


class Program(db.Model):

    __tablename__ = "programs"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    title = db.Column(
        db.String(255),
        nullable=False
    )
    
    excerpt = db.Column(
    db.String(500),
    nullable=False
    )

    description = db.Column(
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

    status = db.Column(
    db.String(20),
    default="draft"
    )

    created_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc)
    )
    
    admin_id = db.Column(
    db.Integer,
    nullable=False
    )