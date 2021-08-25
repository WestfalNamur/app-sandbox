"""Tests mutation functions that directly operate on data."""

import app.core.functions.mutations.model_state as fmute
from app.types.base_model import SurfacePoint


# -----------------------------------------------------------------------------
# Surface-Points
# -----------------------------------------------------------------------------


def test_surface_point_validate_data_success() -> None:
    """Outside of model extent."""
    surface_point = SurfacePoint(
        idx="0",
        x=42,
        y=42,
        z=42,
        x_uc_dist="normal",
        x_uc=21,
        y_uc_dist="normal",
        y_uc=21,
        z_uc_dist="normal",
        z_uc=21,
        smooth=0.001,
        formation="surf1",
    )
    isValid = fmute.surface_point_validate(surface_point=surface_point)
    assert isValid


def test_surface_point_validate_data_fail_extent() -> None:
    """Outside of model extent."""
    surface_point = SurfacePoint(
        idx="0",
        x=42000,
        y=42,
        z=42,
        x_uc_dist="normal",
        x_uc=21,
        y_uc_dist="normal",
        y_uc=21,
        z_uc_dist="normal",
        z_uc=21,
        smooth=0.001,
        formation="surf1",
    )
    isValid = fmute.surface_point_validate(surface_point=surface_point)
    assert not isValid


def test_surface_point_validate_data_fail_surface() -> None:
    """Outside of model extent."""
    surface_point = SurfacePoint(
        idx="0",
        x=42,
        y=42,
        z=42,
        x_uc_dist="normal",
        x_uc=21,
        y_uc_dist="normal",
        y_uc=21,
        z_uc_dist="normal",
        z_uc=21,
        smooth=0.001,
        formation="not_existing_surface",
    )
    isValid = fmute.surface_point_validate(surface_point=surface_point)
    assert not isValid


def test_surface_point_validate_surface() -> None:
    """No surface."""
    pass


def test_add_surface_point() -> None:
    pass


def test_mutate_surface_point() -> None:
    pass


def test_remove_surface_point() -> None:
    pass


# -----------------------------------------------------------------------------
# Orientations
# -----------------------------------------------------------------------------


def test_orientation_validate_data() -> None:
    """Outside of model extent."""
    pass


def test_orientation_validate_surface() -> None:
    """No surface."""
    pass


def test_add_orientation() -> None:
    pass


def test_mutate_orientation() -> None:
    pass


def test_remove_orientation() -> None:
    pass
