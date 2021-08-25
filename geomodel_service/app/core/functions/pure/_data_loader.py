import uuid
import logging

import pandas as pd  # type: ignore

from app.types.base_model import SurfacePoint

LOGGER = logging.getLogger("DATA")


def from_csv_surface_points(path: str) -> pd.DataFrame:
    """Load surface-points from csc into a DFrame.

    Args:
        path: Path to surface points .csv file.

    Return:
        DFrame: New created and populated SurfacePointsDFrame

    Raises:
        ValidationError: When loaded surface point does not have the right
        shape.

    """
    csv_data: pd.DataFrame = pd.read_csv(path)
    lst = []
    for _, row in csv_data.iterrows():
        point: SurfacePoint = SurfacePoint(
            idx=uuid.uuid4().hex,
            x=row["X"],
            y=row["Y"],
            z=row["Z"],
            x_uc_dist=row["x_uc_dist"],
            x_uc=row["x_uc"],
            y_uc_dist=row["y_uc_dist"],
            y_uc=row["y_uc"],
            z_uc_dist=row["z_uc_dist"],
            z_uc=row["z_uc"],
            smooth=row["smooth"],
            formation=row["formation"],
        )
        lst.append(point.dict())

    LOGGER.log(
        level=logging.WARN,
        msg=(
            "TODO: Setup ModelState, 1st Meta, 2nd Populate"
            "including checks if feasible."
        ),
    )

    dframe: pd.DataFrame = pd.DataFrame(data=lst)

    return dframe
