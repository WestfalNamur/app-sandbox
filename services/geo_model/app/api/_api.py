import logging
from typing import Dict, List

import uvicorn  # type: ignore
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.types._data_generators import Point
from app.types._gempy_data import SurfacePoint
from app.core._data_generators import _generate_points, _generate_random_surface_points


# logger
LOGGER = logging.getLogger("API")

# ==============================================================================
# Configure app
# ==============================================================================

# api instance
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==============================================================================
# endpoints
# ==============================================================================
@app.get("/ping")
async def ping() -> Dict[str, str]:
    """Connection check."""
    return {"msg": "Ping!"}


@app.get("/points")
async def points_data() -> List[Point]:
    """Returns some random generated greetings"""
    return _generate_points()


@app.get("/random-surface-points")
async def random_surface_points_data() -> List[SurfacePoint]:
    """Returns some generate randome surface points"""
    return _generate_random_surface_points()


# ==============================================================================
# run
# ==============================================================================
def run(host: str, port: int) -> None:
    """Runs api."""
    LOGGER.info("Api: run")
    uvicorn.run(app, host=host, port=port)
