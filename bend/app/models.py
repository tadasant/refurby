import enum
import itertools

from app import db

class Degree(enum.Enum):
    HIGH_SCHOOL = 'high_school'
    ASSOCIATE = 'associate'
    BACHELOR = 'bachelor'
    MASTER = 'master'
    PHD = 'phd'


friendship = db.Table(
    'friendships',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), index=True),
    db.Column('friend_id', db.Integer, db.ForeignKey('user.id')),
    db.UniqueConstraint('user_id', 'friend_id', name='unique_friendships'))


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

    friends = db.relationship(
        'User',
        secondary=friendship,
        primaryjoin=id==friendship.c.user_id,
        secondaryjoin=id==friendship.c.friend_id)


    def befriend(self, friend):
        if friend not in self.friends:
            self.friends.append(friend)
            friend.friends.append(self)

    def unfriend(self, friend):
        if friend in self.friends:
            self.friends.remove(friend)
            friend.friends.remove(self)

    def all_second_degree_connections(self):
        friends = self.friends
        fofs = [f.friends for f in friends]
        all_connections = friends + list(itertools.chain(*fofs))

        connections = []
        user_ids = set()
        for user in all_connections:
            if user.id != self.id and user.id not in user_ids:
                connections.append(user)
                user_ids.add(user.id)
        return connections

    def __repr__(self):
        return '<User {}>'.format(self.email)