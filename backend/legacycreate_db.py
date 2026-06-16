from app import create_app
from app.extensions.db import db
from app.models.admin_user import AdminUser
app = create_app()

with app.app_context():

    db.create_all()

    print("Database created.")