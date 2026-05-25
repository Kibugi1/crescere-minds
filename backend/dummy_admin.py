from app import create_app

from app.extensions.db import db

from app.models.admin_user import AdminUser

app = create_app()

with app.app_context():

    admin = AdminUser(
        name="Brian",
        email="admin@crescere.com"
    )

    admin.set_password("admin123")

    db.session.add(admin)

    db.session.commit()

    print("Admin created.")