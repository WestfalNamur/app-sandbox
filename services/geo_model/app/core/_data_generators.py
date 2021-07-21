from typing import List
from random import randint
from time import sleep

from app.types._data_generators import Point


def _generate_points() -> List[Point]:
    """Generate some random comments."""
    sleep(1)
    points: List[Point] = [
        Point(
            ix=randint(0, 1000),
            jy=randint(0, 1000),
            kz=randint(0, 1000),
            value="Something",
        )
        for i in range(10)
    ]
    return points
