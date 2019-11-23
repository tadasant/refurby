import json

from flask import request, jsonify

from app import app
from app.models import User
from app.scorer import generate_matches

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"


@app.route('/send_opp', methods=['GET', 'POST'])
def send_opp():
		pass


@app.route('/find_matches', methods=['GET', 'POST'])
def find_matches():
		user_id = request.args.get("user_id", 1, type=int)
		opp = json.loads(request.args.get("opp"))
		user = User.query.filter_by(id=user_id).first()
		friends_of_friends = user.friends_of_friends()
		matches = generate_matches(friends_of_friends, opp)
		matches_data = [
			{
				"id": c.id,
				"name": c.name,
				"degree": 2,
				"linkedInUrl": c.linkedin_url,
				"imageUrl": c.image_url,
				"matchScore": score,
				"matchFields": reasons
			} for (c, score, reasons) in matches

		]
		return jsonify({'connections': matches_data})
