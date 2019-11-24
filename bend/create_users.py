from app.models import User
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
            phone_number='+14842229088',
        ),
        User(
            id=2,
            email='andrewli1030@gmail.com',
            name='Andrew',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+19735080493',
        ),
        User(
            id=3,
            email='adrian@gmail.com',
            name='Adrian',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+17865154282',
        ),
        User(
            id=4,
            email='dennis@gmail.com',
            name='Dennis',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+16504410574',
        ),
        User(
            id=5,
            email='morgan@gmail.com',
            name='Morgan',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+14848899913',
        ),
    ]

    users[0].befriend(users[1])
    users[1].befriend(users[2])
    users[2].befriend(users[3])
    users[3].befriend(users[4])

    for user in users:
        db.session.add(user)
    db.session.commit()


if __name__ == '__main__':
    create_users()
