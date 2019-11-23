from typing import NamedTuple


class RedirectSmsRequest(NamedTuple):
    switchboard_number: str
    from_number: str
    body: str