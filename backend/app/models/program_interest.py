from datetime import datetime, timezone

from app.extensions.db import db


class ProgramInterest(db.Model):

    __tablename__ = "program_interests"

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    program_id = db.Column(
        db.Integer,
        db.ForeignKey("programs.id"),
        nullable=False
    )

    name = db.Column(
        db.String(255),
        nullable=False
    )

    email = db.Column(
        db.String(255),
        nullable=False
    )

    phone = db.Column(
        db.String(30),
        nullable=False
    )

    message = db.Column(
        db.Text,
        nullable=True
    )

    status = db.Column(
        db.String(20),
        default="new"
    )

    created_at = db.Column(
        db.DateTime,
        default=lambda: datetime.now(timezone.utc)
    )

    program = db.relationship(
        "Program",
        backref=db.backref(
            "interests",
            lazy=True
        )
    )