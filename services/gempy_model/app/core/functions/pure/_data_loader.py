# import pandas as pd  # type: ignore

# import app.types._gempy_data as gp_types


# def from_csv_surface_points(path: str) -> pd.DataFrame:
#     """Creates a new surface-point DFrame, loads surface-point data from csv,
#     inserts them into the DFrame and returns it.

#     RunType check via Pydantic."""
#     new_geo_model_surface_points = pd.DataFrame(
#         columns=gp_types.SurfacePoint.schema()["properties"].keys()
#     )
#     csv_data = pd.read_csv(path=path)

#     for index, row in csv_data.iterrows():


#     print(new_geo_model_surface_points)
