from app import create_app

from app.extensions.db import db

from app.models.admin_user import AdminUser

app = create_app()

with app.app_context():
 existing_admin = AdminUser.query.filter_by(email="admin@crescere.com").first()
 if existing_admin:
     print("Admin already exists.")
 else:
    admin = AdminUser(
        name="Brian",
        email="admin@crescere.com"
    )

    admin.set_password("admin123")

    db.session.add(admin)

    db.session.commit()

    print("Admin created.")