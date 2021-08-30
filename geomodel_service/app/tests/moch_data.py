"""Load test-model."""

import pandas as pd  # type: ignore

from app.core.data.example_data.meta import extent, resolution
from app.core.data.model_state import model_state

# Set model_state
def set_model_state() -> None:
    """Setting model_state form hardcoded test-data."""
    model_state["resolution"] = resolution
    model_state["geo_model_extent"] = extent
