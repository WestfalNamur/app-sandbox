"""FastAPI main."""

import logging
from typing import Dict, List

import uvicorn  # type: ignore
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.models.base_models import ModelState, SurfacePoint
from app.core.examples import surface_points_simple

# logger
LOGGER = logging.getLogger("API")

# ==============================================================================
# Configure app
# ==============================================================================

# app instance
app = FastAPI()

# model instance represented as state  # Empty at first.
gpmodel_state: ModelState = ModelState(name="", surface_points=[])

# Check env variable: test? load example data.
gpmodel_state.name = "Example - simple."
gpmodel_state.surface_points = surface_points_simple


# Allowed origin
origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8000",
    "http://localhost:3000",
]

# Middleware
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
    """Check connection.

    Returns:
        msg: A ping.
    """
    return {"msg": "Ping!"}


@app.get("/data/surface_points")
async def get_surface_points() -> List[SurfacePoint]:
    """Check connection.

    Returns:
        msg: A ping.
    """
    return gpmodel_state.surface_points


# ==============================================================================
# run
# ==============================================================================
def run(host: str, port: int) -> None:
    """Run api.

    Args:
        host: Host address.
        port: Port to run on.
    """
    uvicorn.run(app, host=host, port=port)
