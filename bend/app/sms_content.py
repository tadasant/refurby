

def get_message_contents(opp):
		return [
				"""
				Hey there, someone is interested in referring you for a %s role
				at a %s company in %s.
				""" % (opp['title'], opp['industry'], opp['location_city']),
				opp["blurb"],
				"Are you interested? Reply to start a conversation with your connection!",
		]
