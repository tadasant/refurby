import pandas as pd
import numpy as np


def educonverter(education_level):
    if education_level == 'High School':
        return 1
    elif education_level == 'Bachelor':
        return 2
    elif education_level == 'Master':
        return 3
    elif education_level == 'Doctorate':
        return 4

def generate_matches(candidates, opp_request, n_top = 50):
    '''Arguments:
            candidates: list of Users
            opp_request: a dictionary from a poster seeking candidates

       Returns:
        ranked dataframe of users and similarity score sorted by degree connection
    '''
    candidates_list = candidates
    df_candidates = pd.DataFrame(candidates_list)

    def city_point_converter(city):
        if city == opp_request['city']:
            return -1
        else:
            return 0

    #Calculate Location Similarity Score

    #df_candidates['city_eucld_score'] = df_candidates['city'].apply(city_point_converter)
    df_candidates['city_eucld_score'] = 0

    #Calculate Years of Experience Similarity Score
    df_candidates['years_of_experience_eucld_dist'] = df_candidates['years_of_experience'].apply(lambda x: np.linalg.norm(x-opp_request['min_years_experience']))

    #Calculate Level of Education Similarity Score
    df_candidates['edunum'] = df_candidates['highestLevelOfEducation'].apply(educonverter)
    df_candidates['highestLevelOfEducation_eucld_dist'] = df_candidates['edunum'].apply(lambda x: np.linalg.norm(x-educonverter(opp_request['highestLevelOfEducation'])))

    #Calculate Total Similarity Score
    df_candidates['eucld_dist'] = df_candidates['highestLevelOfEducation_eucld_dist'] + df_candidates['years_of_experience_eucld_dist'] + df_candidates['city_eucld_score']

    print(opp_request)
    print('')

    df_candidates = df_candidates.sort_values(by = ['eucld_dist', 'degree'], ascending = True).reset_index().drop(['index', 'edunum'], axis = 1)
    tupp = (candidates[0], df_candidates['eucld_dist'][0])
    return tupp