import logging
from typing import Dict, List

import uvicorn  # type: ignore
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.types import SurfacePoint
import app.core.functions.pure._data_generators as data_generators

from app.core.data import model_state


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

print(model_state)


# ==============================================================================
# endpoints
# ==============================================================================
@app.get("/ping")
async def ping() -> Dict[str, str]:
    """Connection check."""
    return {"msg": "Ping!"}


@app.get("/random-surface-points")
async def random_surface_points_data() -> List[SurfacePoint]:
    """Returns some generate randome surface points"""
    return data_generators._generate_random_surface_points()


# ==============================================================================
# run
# ==============================================================================
def run(host: str, port: int) -> None:
    """Runs api."""
    LOGGER.info("Api: run")
    uvicorn.run(app, host=host, port=port)
