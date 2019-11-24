import json

from flask import request, jsonify

from app import app
from app.models import User
from app.scorer import generate_matches
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
		# user = User.query.filter_by(id=user_id).first()
		# from_number = user.phone_number

		receiver_ids = data["receiver_ids"]
		# receiver_users = User.query.filter(User.id.in_(receiver_ids)).all()

		opp = data["opp"]
		message_contents = get_message_contents(opp)

		# for receiver in receiver_users:
		for message in message_contents:
			send_sms('+14842229088', '+19735080493', message)
			send_sms('+14842229088', '+17865154282', message)
			send_sms('+14842229088', '+16504410574', message)
			send_sms('+14842229088', '+14848899913', message)
		# print("sending message(s) %s from %s to %s" %  (message_contents, from_number, receiver.phone_number))
		return 'Messages were sent!'


@app.route('/find_matches', methods=['POST'])
def find_matches():
		data = request.json
		user_id = data['user_id']
		opp = data['opp']
		user = User.query.filter_by(id=user_id).first()
		friends_of_friends = user.all_second_degree_connections()
		# matches = generate_matches(friends_of_friends, opp)
		matches = []
		matches_data = [
			{
				"id": 2,
				"name": 'Andrew Li',
				"degree": 2,
				"linkedInUrl": 'url',
				"imageUrl": 'url',
				"matchScore": 97,
				"matchFields": []
			},
			{
				"id": 3,
				"name": 'Adriano L',
				"degree": 2,
				"linkedInUrl": 'url',
				"imageUrl": 'url',
				"matchScore": 75,
				"matchFields": []
			},
			{
				"id": 4,
				"name": 'Dennis Sell',
				"degree": 1,
				"linkedInUrl": 'url',
				"imageUrl": 'url',
				"matchScore": 65,
				"matchFields": []
			},
			{
				"id": 4,
				"name": 'Morgan',
				"degree": 1,
				"linkedInUrl": 'url',
				"imageUrl": 'url',
				"matchScore": 60,
				"matchFields": []
			},
		]
		return jsonify({'connections': matches_data})
