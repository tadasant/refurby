from typing import NamedTuple


class SendSmsRequest(NamedTuple):
    to_number: str
    from_number: str
    body: str