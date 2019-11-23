import requests

SMS_URL = 'http://0:5001/send_sms'


def send_sms(from_number: str, to_number:str, body: str):
    return requests.post(SMS_URL, json={'from_number': from_number, 'to_number': to_number, 'body': body})
