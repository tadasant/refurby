import pickledb

switchboard_db = pickledb.load('switchboard.db', False)


def add_switchboard_mapping(switchboard_number: str, from_number: str, to_number: str):
    mappings = switchboard_db.get(switchboard_number)
    if not mappings:
        mappings = {}
    mappings[switchboard_number] = {
        from_number: to_number,
        to_number: from_number,
    }
    switchboard_db.set(switchboard_number, mappings)
    switchboard_db.dump()


def get_switchboard_mapping(from_number: str, switchboard_number: str) -> str:
    mappings = switchboard_db.get(switchboard_number)
    if not mappings:
        mappings = {}
    return mappings[switchboard_number][from_number]