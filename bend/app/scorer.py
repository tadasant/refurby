import pandas as pd
import numpy as np

from app.models import Degree


def educonverter(education_level):
    if education_level == Degree.HIGH_SCHOOL:
        return 1
    elif education_level == Degree.ASSOCIATE:
        return 2
    elif education_level == Degree.BACHELOR:
        return 3
    elif education_level == Degree.MASTER:
        return 4
    elif education_level == Degree.PHD:
    		return 5

def generate_matches(candidates, opp_request, n_top = 50):
    '''Arguments:
            candidates: list of Users
            opp_request: a dictionary from a poster seeking candidates

       Returns:
        ranked dataframe of users and similarity score sorted by degree connection
    '''
    #print(candidates)
    candidates = [
    	{
    		'city': c.city,
    		'id': c.id,
    		'years_of_experience': c.years_of_experience,
    		'edunum': educonverter(c.degree),
    		'user': c,
    	}
    	for c in candidates]
    df_candidates = pd.DataFrame(candidates)

    def city_point_converter(city):
        if city == opp_request['city']:
            return -1
        else:
            return 0

    #Calculate Location Similarity Score

    df_candidates['city_eucld_score'] = df_candidates['city'].apply(city_point_converter)

    #Calculate Years of Experience Similarity Score
    df_candidates['years_of_experience_eucld_dist'] = df_candidates['years_of_experience'].apply(lambda x: np.linalg.norm(x-opp_request['min_years_experience']))

    #Calculate Level of Education Similarity Score
    df_candidates['highestLevelOfEducation_eucld_dist'] = df_candidates['edunum'].apply(lambda x: np.linalg.norm(x-educonverter(Degree(opp_request['highestLevelOfEducation']))))

    #Calculate Total Similarity Score
    df_candidates['eucld_dist'] = (df_candidates['highestLevelOfEducation_eucld_dist']
    		+ df_candidates['years_of_experience_eucld_dist']
		    		+ df_candidates['city_eucld_score'])

    #print(opp_request)
    #print('')

    df_candidates = df_candidates.sort_values(by = ['eucld_dist'], ascending = True).reset_index().drop(['index', 'edunum'], axis = 1)
    ranked_df = df_candidates.iloc[0:n_top]

    #print(ranked_df)
    for row in ranked_df.iterrows():
    		print(row[1].user)
    		print(len(row))

    return [(row[1].user, row[1].eucld_dist, []) for row in ranked_df.iterrows()]