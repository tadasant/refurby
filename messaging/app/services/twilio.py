from twilio.rest import Client
from app.settings import ACCOUNT_SID
from app.settings import AUTH_TOKEN


class TwilioClient:
    def __init__(self):
        self.client = Client(ACCOUNT_SID, AUTH_TOKEN)

    def get_twilio_number(self):
        # return '+19548004479'
        return '+12673231526'

    def send_sms(self, from_number: str, to_number: str, body: str) -> str:
        message = self.client.messages.create(
            body=body,
            from_=from_number,
            to=to_number,
        )
        return message.sid


twilio_client = TwilioClient()
