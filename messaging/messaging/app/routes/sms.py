from flask import request
from messaging.app.coreservices.send_sms import send_sms
from messaging.app.coreservices.send_sms import redirect_sms
from flask import Blueprint
from messaging.app.requests.send_sms_request import SendSmsRequest
from messaging.app.requests.redirect_sms_request import RedirectSmsRequest

blueprint = Blueprint('sms', __name__)

SWITCHBOARD = {
    '+19548004479': {
        '+19735080493': '+19735080493',
    }
}


@blueprint.route("/sms", methods=['GET', 'POST'])
def sms_webhook_route():
    import pdb
    pdb.set_trace()
    req = RedirectSmsRequest(
        from_number=request.values.get('From'),
        switchboard_number=request.values.get('To'),
        body=request.values.get('Body'),
    )
    redirect_sms(req)
    return '', 204


@blueprint.route("/send_sms", methods=['POST'])
def send_sms_route():
    data = request.json
    req = SendSmsRequest(
        from_number=data['from_number'],
        to_number=data['to_number'],
        body=data['body'],
    )
    send_sms(req)
    return '', 204
