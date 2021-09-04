"""FastAPI main."""

import logging
from typing import Dict

import uvicorn  # type: ignore
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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
