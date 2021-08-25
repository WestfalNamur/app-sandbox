from typing import List
from random import uniform
import uuid

from app.types.base_model import SurfacePoint, DistUcEnum


def _generate_random_surface_points() -> List[SurfacePoint]:
    """Generates random list of surface points"""
    surface_points: List[SurfacePoint] = [
        SurfacePoint(
            idx=uuid.uuid4().hex,
            x=uniform(0, 1000),
            y=uniform(0, 1000),
            z=uniform(0, 1000),
            x_uc_dist=DistUcEnum.uniform,
            x_uc=uniform(0, 1000),
            y_uc_dist=DistUcEnum.uniform,
            y_uc=uniform(0, 1000),
            z_uc_dist=DistUcEnum.uniform,
            z_uc=uniform(0, 1000),
            smooth=0.01,
            formation="Formation_0",
        )
        for i in range(42)
    ]
    return surface_points
