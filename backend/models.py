from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class PhaseModule(db.Model):
    __tablename__ = 'phase_modules'
    
    id = db.Column(db.Integer, primary_key=True)
    phase_number = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    status = db.Column(db.String(20), default="In Progress")

    def to_dict(self):
        return {
            "id": self.id,
            "phase_number": self.phase_number,
            "title": self.title,
            "description": self.description,
            "status": self.status
        }