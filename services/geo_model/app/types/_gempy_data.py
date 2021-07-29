from enum import Enum

from pydantic import BaseModel

""" Main GemPy data classes

See: https://www.gempy.org/tutorials

-  Surface_points
-  Orientations
-  Grid
-  Surfaces
-  Series
-  Additional data
-  Faults
"""


class DistUcEnum(str, Enum):
    normal = "normal"
    triangular = "triangular"
    uniform = "uniform"


class SurfacePoint(BaseModel):
    idx: int
    x_coord: float
    y_coord: float
    z_coord: float
    x_coord_uc_dist: DistUcEnum
    x_coord_uc: float
    y_coord_uc_dist: DistUcEnum
    y_coord_uc: float
    z_coord_uc_dist: DistUcEnum
    z_coord_uc: float
    smooth: float
    formation: str
