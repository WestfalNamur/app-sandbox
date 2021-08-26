"""Create random data."""

import uuid
from random import uniform
from typing import List

from app.types.base_model import DistUcEnum, SurfacePoint


def _gen_random_number() -> float:
    """Generate a random number in range 0 to 1000.

    Returns:
        Random number.
    """
    return uniform(0, 1000)


def generate_random_surface_points() -> List[SurfacePoint]:
    """Generate random list of surface points.

    Returns:
        Randomly generated list of surface points.
    """
    surface_points: List[SurfacePoint] = []
    for _ in range(42):
        surface_point = SurfacePoint(
            idx=uuid.uuid4().hex,
            x=_gen_random_number(),
            y=_gen_random_number(),
            z=_gen_random_number(),
            x_uc_dist=DistUcEnum.uniform,
            x_uc=_gen_random_number(),
            y_uc_dist=DistUcEnum.uniform,
            y_uc=_gen_random_number(),
            z_uc_dist=DistUcEnum.uniform,
            z_uc=_gen_random_number(),
            smooth=0.01,
            formation="Formation_0",
        )
        surface_points.append(surface_point)
    return surface_points
