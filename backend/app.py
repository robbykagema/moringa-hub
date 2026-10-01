from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, PhaseModule

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///moringa.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

CORS(app)
db.init_app(app)

@app.before_request
def create_tables():
    db.create_all()

@app.route('/api/phases', methods=['GET'])
def get_phases():
    phases = PhaseModule.query.all()
    return jsonify([p.to_dict() for p in phases]), 200

@app.route('/api/phases', methods=['POST'])
def add_phase():
    data = request.get_json()
    new_phase = PhaseModule(
        phase_number=data.get('phase_number'),
        title=data.get('title'),
        description=data.get('description'),
        status=data.get('status', 'In Progress')
    )
    db.session.add(new_phase)
    db.session.commit()
    return jsonify(new_phase.to_dict()), 201

if __name__ == '__main__':
    app.run(port=5555, debug=True)