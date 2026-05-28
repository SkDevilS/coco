from app import create_app
from models import db, User
from werkzeug.security import generate_password_hash

app = create_app()

with app.app_context():
    # Check if admin already exists
    existing_admin = User.query.filter_by(email='admin@cocoventures.store').first()
    
    if existing_admin:
      print("Admin user already exists!")
      print("Email: admin@cocoventures.store")
    else:
      admin = User(
        email='admin@cocoventures.store',
        password_hash=generate_password_hash('admin@123'),
        name='Admin User',
        role='admin'
      )
      
      db.session.add(admin)
      db.session.commit()
      
      print("✅ Admin user created successfully!")
      print("=" * 50)
      print("Email: admin@cocoventures.store")
      print("Password: admin@123")
      print("=" * 50)
      print("⚠️  IMPORTANT: Change this password after first login!")
