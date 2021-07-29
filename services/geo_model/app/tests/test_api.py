"""Tests the api endpoints."""
from typing import List

from fastapi.testclient import TestClient
from pydantic import parse_obj_as

from app.api._api import app
from app.types._data_generators import Point
from app.types._gempy_data import SurfacePoint

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


def test_greetings() -> None:
    """Check if greetings endpoint returns the correct data shape."""
    res = client.get("/points")
    assert res.status_code == 200
    parse_obj_as(List[Point], res.json())


def test_generate_random_surface_points_api() -> None:
    """Test Api to generate randome surface points"""
    res = client.get("/random-surface-points")
    assert res.status_code == 200
    parse_obj_as(List[SurfacePoint], res.json())
