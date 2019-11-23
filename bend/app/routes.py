import json

from flask import request, jsonify

from app import app
from app.models import User
# from app.scorer import generate_matches
from app.sms_content import get_message_contents
from app.messaging import send_sms

@app.route('/')
@app.route('/index')
def index():
    return "Hello, World!"


@app.route('/send_opp', methods=['GET', 'POST'])
def send_opp():
		data = request.json
		user_id = data["user_id"]
		user = User.query.filter_by(id=user_id).first()
		from_number = user.phone_number

		receiver_ids = data["receiver_ids"]
		receiver_users = User.query.filter(User.id.in_(receiver_ids)).all()

		opp = data["opp"]
		message_contents = get_message_contents(opp)

		for receiver in receiver_users:
				for message in message_contents:
						send_sms(from_number, receiver.phone_number, message)
						print("sending message(s) %s from %s to %s" %  (message_contents, from_number, receiver.phone_number))
		return 'Messages were sent!'


@app.route('/find_matches', methods=['GET', 'POST'])
def find_matches():
		user_id = request.args.get("user_id", 1, type=int)
		opp = json.loads(request.args.get("opp"))
		user = User.query.filter_by(id=user_id).first()
		friends_of_friends = user.all_second_degree_connections()
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
