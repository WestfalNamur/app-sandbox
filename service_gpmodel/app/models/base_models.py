"""Define Pydantic BaseModels for our app."""
from typing import List

from pydantic import BaseModel

# ==============================================================================
# Gempy data models
# ==============================================================================


class SurfacePoint(BaseModel):
    idx: str
    x: float
    y: float
    z: float
    x_uc: float
    y_uc: float
    z_uc: float
    smooth: float
    formation: str


# ==============================================================================
# App state model
# ==============================================================================


class ModelState(BaseModel):
    name: str
    surface_points: List[SurfacePoint]
