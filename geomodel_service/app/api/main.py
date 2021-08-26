"""Main of our service.

Here we define our FastAPI server, set endpoints and their logic etc.
"""

import logging
from typing import Dict, List

import uvicorn  # type: ignore
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import app.core.functions.pure.data_generators as data_generators
from app.types.base_model import SurfacePoint

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
    """Check connection.

    Returns:
        msg: A ping.
    """
    return {"msg": "Ping!"}


@app.get("/random-surface-points")
async def random_surface_points_data() -> List[SurfacePoint]:
    """Generate randome surface points.

    Returns:
        SurfacePoints: A list of randomly generated surface points.
    """
    return data_generators.generate_random_surface_points()


# ==============================================================================
# run
# ==============================================================================
def run(host: str, port: int) -> None:
    """Run api.

    Args:
        host: Host address.
        port: Port to run on.
    """
    LOGGER.info("Api: run")
    uvicorn.run(app, host=host, port=port)
