"""Tests the api endpoints."""

from fastapi.testclient import TestClient

from app.api.main import app

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
