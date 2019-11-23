import json

from flask import request, jsonify

from app import app
from app.models import User
from app.scorer import candidate_score_for_opp

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
		opp = {
			'blurb': "This job is for a kick-ass engineer",
		}
		user = User.query.filter_by(id=user_id).first()
		friends_of_friends =  user.friends_of_friends()
		friends_of_friends.sort(
				reverse=True,
				key=lambda c: candidate_score_for_opp(c, opp))
		print(friends_of_friends)
		return friends_of_friends[0].name