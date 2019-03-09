from app import app, db
from models.murderer import Murderer
from models.victim import Victim
from models.weapon import Weapon
from models.user import User, UserSchema

user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    mike, errors = user_schema.load({
        'username': 'mickyginger',
        'email': 'mickyginger@gmail.com',
        'password': 'password',
        'password_confirmation': 'password'
    })

    if errors:
        raise Exception(errors)

    db.session.add(mike)

    begona, errors = user_schema.load({
        'username': 'begoña',
        'email': 'bdizzle@gmail.com',
        'password': 'bdizzletron',
        'password_confirmation': 'bdizzletron'
    })

    if errors:
        raise Exception(errors)

    db.session.add(begona)

    hands = Weapon(name='Hands')
    db.session.add(hands)

    knife = Weapon(name='Knife')
    db.session.add(knife)

    rope = Weapon(name='Rope')
    db.session.add(rope)

    jack = Murderer(name='Jack the Ripper', creator=begona, liked_by=[mike])
    db.session.add(jack)

    linda = Victim(name='Linda Ann Healy')
    db.session.add(linda)

    margaret = Victim(name='Margaret Bowman')
    db.session.add(margaret)

    ted = Murderer(
        name='Theodore Bundy',
        victims=[linda, margaret],
        weapons=[hands, knife, rope],
        creator=begona,
        liked_by=[mike]
    )
    db.session.add(ted)

    db.session.commit()
