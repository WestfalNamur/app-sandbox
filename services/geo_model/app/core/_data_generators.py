from typing import List
from random import randint
from time import sleep

from app.types._greetings import Greeting


def _generate_greetings() -> List[Greeting]:
    """Generate some random comments."""
    sleep(1)
    greetings: List[Greeting] = [
        Greeting(
            greeting_id=i,
            text="Hello! Some text. Do not know what to type here?",
            urgency=randint(0, 10),
        )
        for i in range(10)
    ]
    return greetings
