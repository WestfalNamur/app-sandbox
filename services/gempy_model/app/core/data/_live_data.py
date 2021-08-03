""" Geo-model-server data. 

Data instances of our live geo-model.

* We use .schema()["properties"].keys() on our BaseModel classes to get their
* field names as colum names in our DataFrames.
"""

import pandas as pd  # type: ignore

import app.types._gempy_data as gp_types

# =============================================================================
# Configuration
# =============================================================================

geo_model_extent = gp_types.GeoModelExtent(
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

geo_model_series = pd.DataFrame(columns=gp_types.Series.schema()["properties"].keys())

geo_model_surfaces = pd.DataFrame(
    columns=gp_types.Surfaces.schema()["properties"].keys()
)

# =============================================================================
# Geological input data
# =============================================================================

geo_model_surface_points = pd.DataFrame(
    columns=gp_types.SurfacePoint.schema()["properties"].keys()
)

geo_model_orientations = pd.DataFrame(
    columns=gp_types.Orientation.schema()["properties"].keys()
)
