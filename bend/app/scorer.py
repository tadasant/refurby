
# def generate_matches(df_candidates, opp_request):
# 	# returns a list of matches in order to be displayed
# 	# with a score and list of reasons for each

#     def location_point_converter(location):
#         if location == opp_request['location']:
#             return -1
#         else:
#             return 0

# 	#Calculate Location Similarity Score 
#     df_candidates['location_eucld_score'] = df_candidates['location'].apply(location_point_converter)

#     #Calculate Years of Experience Similarity Score
#     df_candidates['years_of_experience_eucld_dist'] = df_candidates['years_of_experience'].apply(lambda x: np.linalg.norm(x - opp_request['min_years_experience']))

#     #Calculate Level of Education Similarity Score
#     df_candidates['edunum'] = df_candidates['highestLevelOfEducation'].apply(educonverter)
#     df_candidates['highestLevelOfEducation_eucld_dist'] = df_candidates['edunum'].apply(lambda x: np.linalg.norm(x - educonverter(opp_request['highestLevelOfEducation'])))
    
#     #Calculate Total Similarity Score
#     df_candidates['eucld_dist'] = df_candidates['highestLevelOfEducation_eucld_dist'] + df_candidates['years_of_experience_eucld_dist'] + df_candidates['location_eucld_score']
    
    
#     print(opp_request)
#     print('')
#     ranked_df = df_candidates.sort_values(by = ['eucld_dist', 'degree_connection'], ascending = True).reset_index().drop(['index', 'edunum'], axis = 1)

# 	return [(ranked_df['name'], ranked_df['eucld_dist'], ["This person is cool!"]) for c in df_candidates]



# def educonverter(education_level):
#     if education_level == 'High School':
#         return 1
#     elif education_level == 'Bachelor':
#         return 2
#     elif education_level == 'Master':
#         return 3
#     elif education_level == 'Doctorate':
#         return 4