from app.models import User, Degree
from app import db


def create_users():
    User.query.delete()
    users = [
        User(
            id=1,
            email='td@gmail.com',
            name='Tadas',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+4842229088',
            years_of_experience=2,
            degree=Degree.ASSOCIATE,
        ),
        User(
            id=2,
            email='andrewli1030@gmail.com',
            name='Andrew',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+19735080493',
            years_of_experience=2,
            degree=Degree.ASSOCIATE,
        ),
        User(
            id=3,
            email='adrian@gmail.com',
            name='Adrian',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+7865154282',
            years_of_experience=2,
            degree=Degree.ASSOCIATE,
        ),
        User(
            id=4,
            email='dennis@gmail.com',
            name='Dennis',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+6504410574',
            years_of_experience=2,
            degree=Degree.ASSOCIATE,
        ),
        User(
            id=5,
            email='morgan@gmail.com',
            name='Morgan',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+4848899913',
            years_of_experience=2,
            degree=Degree.ASSOCIATE,
        ),
    ]

    for user in users:
        db.session.add(user)
    db.session.commit()

    users[0].befriend(users[1])
    users[1].befriend(users[2])
    users[2].befriend(users[3])
    users[3].befriend(users[4])

    db.session.commit()


if __name__ == '__main__':
    create_users()
