"""Geo-model-server data."""
import sys

import pandas as pd  # type: ignore

from app.core.functions.pure.data_loader import from_csv_surface_points
from app.types.base_model import (
    GeoModelExtent,
    GpSeries,
    ModelState,
    Orientation,
    SurfacePoint,
    Surfaces,
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
file_path = sys.path[0]
csv_path = "/app/core/data/DUMMY_DATA/_surface_points_simple.csv"
path = "{0}{1}".format(file_path, csv_path)

model_state["surface_points"] = from_csv_surface_points(path=path)
