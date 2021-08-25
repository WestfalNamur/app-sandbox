from enum import Enum


from typing import TypedDict
from pydantic import BaseModel
import pandas as pd  # type: ignore


""" Pydantic BaseModel types

GemPy based types (https://www.gempy.org)
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


# =============================================================================
# Configuration
# =============================================================================


class GeoModelExtent(BaseModel):
    x_min: int
    x_max: int
    y_min: int
    y_max: int
    z_min: int
    z_max: int


# =============================================================================
# Topology data
# =============================================================================


class GpSeries(BaseModel):
    name: str
    isfault: bool
    order_series: int


class Surfaces(BaseModel):
    name: str
    series: str
    order_surface: int


# =============================================================================
# Geological input data
# =============================================================================


class SurfacePoint(BaseModel):
    idx: str
    x: float
    y: float
    z: float
    x_uc_dist: str
    x_uc: float
    y_uc_dist: str
    y_uc: float
    z_uc_dist: str
    z_uc: float
    smooth: float
    formation: str


class Orientation(BaseModel):
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


# =============================================================================
# Combine to model-state
# =============================================================================


# Using TypedDict here to integrate Pandas
class ModelState(TypedDict):
    geo_model_extent: GeoModelExtent
    series: pd.DataFrame
    surfaces: pd.DataFrame
    surface_points: pd.DataFrame
    orientations: pd.DataFrame
