# flake8: noqa
"""Mutations that apply on the model-state."""

import pandas as pd  # type: ignore
import pandera as pa
from pandera.typing import DataFrame

from app.core.data.model_state import model_state
from app.types.base_model import GpSeries, Orientation, SurfacePoint
from app.types.schema_model import GpSeriesPa

# -----------------------------------------------------------------------------
# Series
# -----------------------------------------------------------------------------


# TODO: Check if it works
@pa.check_types  # type: ignore
def series_add_serie(
    df: DataFrame[GpSeriesPa],
    new_serie: GpSeries,
) -> DataFrame[GpSeriesPa]:
    """Concate series and new serie.

    Args:
        df: Current series
        new_serie: A single new series

    Returns:
        DFrame: New, updated DFrame.
    """
    new_serie_df = pd.DataFrame(new_serie.dict(), index=[0])
    df = pd.concat([df, new_serie_df])
    return df


# -----------------------------------------------------------------------------
# Surface-Points
# -----------------------------------------------------------------------------


def surface_point_validate(surface_point: SurfacePoint) -> bool:
    """Validate surface-point in context of the model.

    Args:
        surface_point: A surface_point to be validated.

    Returns:
        bool: Is valid?
    """
    extent = model_state["geo_model_extent"]
    surfaces: pd.Series = model_state["surfaces"]["name"]

    # Check if within extent
    if not (
        extent.x_min < surface_point.x
        and extent.x_max > surface_point.x
        and extent.y_min < surface_point.x
        and extent.y_max > surface_point.x
        and extent.z_min < surface_point.x
        and extent.z_max > surface_point.x
    ):
        return False

    # Check if any str in the surfaces pd.Series containts the formation name.
    if not any(surfaces.str.contains(surface_point.formation)):
        return False

    return True


def add_surface_point(surface_point: SurfacePoint) -> None:
    # Reference model_state
    # Validate
    # Add
    pass


def mutate_surface_point(surface_point: SurfacePoint) -> None:
    # Reference model_state
    # Validate
    # Check if in model_state
    # Mutate
    pass


def delete_surface_point(surface_point: SurfacePoint) -> None:
    # Reference model_state
    # Validate
    # Check if in model_state
    # Delete
    pass


# -----------------------------------------------------------------------------
# Orientations
# -----------------------------------------------------------------------------


def add_orientation(orientation: Orientation) -> None:
    # Reference model_state
    # Validate
    # Add
    pass


def mutate_orientation(orientation: SurfacePoint) -> None:
    # Reference model_state
    # Validate
    # Check if in model_state
    # Mutate
    pass


def delete_orientation(orientation: SurfacePoint) -> None:
    # Reference model_state
    # Validate
    # Check if in model_state
    # Delete
    pass
