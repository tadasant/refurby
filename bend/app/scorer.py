
def generate_matches(candidates, opp):
	# returns a list of matches in order to be displayed
	# with a score and list of reasons for each
	return [(c, 1.0, ["This person is cool!"]) for c in candidates]