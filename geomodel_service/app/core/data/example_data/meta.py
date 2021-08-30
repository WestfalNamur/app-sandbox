"""Some test meta data."""

from app.types.base_model import GeoModelExtent, GeoModelResolution

resolution = GeoModelResolution(xaxis=50, yaxis=50, zaxis=50)

extent = GeoModelExtent(
    x_min=0,
    x_max=1000,
    y_min=0,
    y_max=1000,
    z_min=0,
    z_max=1000,
)
