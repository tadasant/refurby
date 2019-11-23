from app.db import add_switchboard_mapping
from app.services.twilio import twilio_client


def add_to_switchboard(from_number: str, to_number: str) -> str:
    twilio_number = twilio_client.get_twilio_number()
    add_switchboard_mapping(twilio_number, from_number, to_number)
    return twilio_number
