""" Geo-model-server data. 

Data instances of our live geo-model.

* We use .schema()["properties"].keys() on our BaseModel classes to get their
* field names as colum names in our DataFrames.
"""

import pandas as pd  # type: ignore

from app.types import (
    GeoModelExtent,
    Series,
    Surfaces,
    SurfacePoint,
    Orientation,
    ModelState,
)

# =============================================================================
# Configuration
# =============================================================================

geo_model_extent = GeoModelExtent(
    x_min=0,
    x_max=1000,
    y_min=0,
    y_max=1000,
    z_min=0,
    z_max=1000,
)


# =============================================================================
# Topology data
# =============================================================================

series = pd.DataFrame(columns=Series.schema()["properties"].keys())

surfaces = pd.DataFrame(columns=Surfaces.schema()["properties"].keys())

# =============================================================================
# Geological input data
# =============================================================================

surface_points = pd.DataFrame(columns=SurfacePoint.schema()["properties"].keys())

orientations = pd.DataFrame(columns=Orientation.schema()["properties"].keys())

# =============================================================================
# Gempy Model State
# =============================================================================


modelState = ModelState(
    geo_model_extent=geo_model_extent,
    series=series,
    surfaces=surfaces,
    surface_points=surface_points,
    orientations=orientations,
)
