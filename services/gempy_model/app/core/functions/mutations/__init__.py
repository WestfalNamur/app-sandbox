import pandas as pd  # type: ignore

from app.types import SurfacePoint, Orientation

from app.core.data import model_state

# -----------------------------------------------------------------------------
# Surface-Points
# -----------------------------------------------------------------------------


def surface_point_validate(surface_point: SurfacePoint) -> bool:
    """Validates surface-point in context of the model."""
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
