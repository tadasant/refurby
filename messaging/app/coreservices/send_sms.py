from app.requests.send_sms_request import SendSmsRequest
from app.requests.redirect_sms_request import RedirectSmsRequest
from app.coreservices.switchboard import add_to_switchboard
from app.db import get_switchboard_mapping
from app.services.twilio import twilio_client


def send_sms(req: SendSmsRequest) -> str:
    switchboard_number = add_to_switchboard(req.from_number, req.to_number)
    return twilio_client.send_sms(switchboard_number, req.to_number, req.body)


def redirect_sms(req: RedirectSmsRequest) -> str:
    to_number = get_switchboard_mapping(req.from_number, req.switchboard_number)
    return twilio_client.send_sms(req.switchboard_number, to_number, req.body)
