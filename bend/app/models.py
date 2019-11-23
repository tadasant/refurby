import enum

from app import db

class Degree(enum.Enum):
    HIGH_SCHOOL = 'high_school'
    ASSOCIATE = 'associate'
    BACHELOR = 'bachelor'
    MASTER = 'master'
    PHD = 'phd'

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), index=True, unique=True)
    name = db.Column(db.String(64))
    phone_number = db.Column(db.String(20))

    city = db.Column(db.String(64))
    current_position = db.Column(db.String(64))
    industry = db.Column(db.String(64))
    years_of_experience = db.Column(db.Integer)
    degree = db.Column(db.Enum(Degree))
    linkedin_url = db.Column(db.String(64))
    image_url = db.Column(db.String(64))

    def friends_of_friends(self):
        return User.query.all()

    def __repr__(self):
        return '<User {}>'.format(self.email)