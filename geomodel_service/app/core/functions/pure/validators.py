"""Data validation functions."""

from app.types.base_model import SurfacePoint

# -----------------------------------------------------------------------------
# Surface-Points
# -----------------------------------------------------------------------------


def validate_surface_point(surface_point: SurfacePoint) -> bool:
    """Return something.

    Args:
        surface_point: A new surface point.

    Returns:
        True
    """
    # Validate data shape. Should work via PyDantic
    # Validate in modelstate context (within extent)
    return True


# -----------------------------------------------------------------------------
# Orientations
# -----------------------------------------------------------------------------


def validate_orientation(orientation: SurfacePoint) -> bool:
    """Return something.

    Args:
        orientation: A new orientation.

    Returns:
        True
    """
    # Validate data shape. Should work via PyDantic
    # Validate in modelstate context (within extent)
    return True
