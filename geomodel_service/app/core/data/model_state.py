""" Geo-model-server data. 

Data instances of our live geo-model.

* We use .schema()["properties"].keys() on our BaseModel classes to get their
* field names as colum names in our DataFrames.
"""
import sys

import pandas as pd  # type: ignore

from app.core.functions.pure._data_loader import from_csv_surface_points

from app.types.base_model import (
    GeoModelExtent,
    GpSeries,
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

series = pd.DataFrame(columns=GpSeries.schema()["properties"].keys())

# Gen surfaces-df
surfaces = pd.DataFrame(columns=Surfaces.schema()["properties"].keys())
# Gen new-surface-df to concate
surf1 = Surfaces(name="surf1", series="series1", order_surface=0).dict()
surf1_df = pd.DataFrame(surf1, index=[0])
surfaces = pd.concat([surfaces, surf1_df])
print(surfaces)


# =============================================================================
# Geological input data
# =============================================================================

surface_points = pd.DataFrame(columns=SurfacePoint.schema()["properties"].keys())

orientations = pd.DataFrame(columns=Orientation.schema()["properties"].keys())

# =============================================================================
# Gempy Model State
# =============================================================================


model_state = ModelState(
    geo_model_extent=geo_model_extent,
    series=series,
    surfaces=surfaces,
    surface_points=surface_points,
    orientations=orientations,
)

# TODO: Remove, only during early development!
model_state["surface_points"] = from_csv_surface_points(
    path=sys.path[0] + "/app/core/data/DUMMY_DATA/_surface_points_simple.csv"
)
