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
    idx: str
    x: float
    y: float
    z: float
    x_uc_dist: DistUcEnum
    x_uc: float
    y_uc_dist: DistUcEnum
    y_uc: float
    z_uc_dist: DistUcEnum
    z_uc: float
    smooth: float
    formation: str
