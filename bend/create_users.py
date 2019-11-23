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
            phone_number='+4842229088',
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
            phone_number='+7865154282',
        ),
        User(
            id=4,
            email='dennis@gmail.com',
            name='Dennis',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+6504410574',
        ),
        User(
            id=5,
            email='adrian@gmail.com',
            name='Morgan',
            city='San Francisco',
            current_position='Software Engineer',
            phone_number='+4848899913',
        ),
    ]
    for user in users:
        db.session.add(user)
    db.session.commit()


if __name__ == '__main__':
    create_users()