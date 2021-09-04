"""Tests the api endpoints."""

from typing import List

import pytest
from fastapi.testclient import TestClient
from pydantic import parse_obj_as

from app.api.main import app

from app.models.base_models import SurfacePoint

client = TestClient(app)


def test_index() -> None:
    """Ensure index fails."""
    res = client.get("/")
    assert res.status_code == 404


def test_sanity_check() -> None:
    """Check if everythin works properly."""
    res = client.get("/ping")
    assert res.status_code == 200
    assert res.json() == {"msg": "Ping!"}


def test_example_data_shape_validation_error() -> None:
    """Ensure test shape of example data surface-points fails with wrong data."""
    res = client.get("/data/surface_points")
    assert res.status_code == 200
    with pytest.raises(Exception):
        parse_obj_as(List[str], res.json())


def test_example_data_shape() -> None:
    """Test shape of example data surface-points."""
    res = client.get("/data/surface_points")
    assert res.status_code == 200
    parse_obj_as(List[SurfacePoint], res.json())
