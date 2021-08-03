""" Geo-model-server data. """

from pydantic import BaseModel
import pandas as pd  # type: ignore


###############################################################################
###                             Configuration                               ###
###############################################################################
# geo_model_extent
geo_model_extent: td.GeoModelExtent = {
    "x_min": 0,
    "x_max": 1000,
    "y_min": 0,
    "y_max": 1000,
    "z_min": 0,
    "z_max": 1000,
}

# section-dictionary
section: td.Section = {"p1": [0, 500], "p2": [1000, 500], "resolution": [100, 100]}
