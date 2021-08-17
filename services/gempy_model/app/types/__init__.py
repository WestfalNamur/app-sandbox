"""
! DEAD CODE
Wanted to use it to automatically export JSONSchemas, generate Typescript
Interfaces via https://github.com/bcherny/json-schema-to-typescript
and then use ajv to validate them. Turned out to be more complicated then
I thought so the trade off is not worth it. 
"""


# from typing import Any
# import os

# dir_path = os.path.dirname(os.path.realpath(__file__))


# RELATIVE_PATH_TO_JSON_SCHEMA_EXPORT_DIR: str = dir_path + "/exports/json_schemas/"


# def write_model_to_JSON_schema(model: Any):
#     file_path = os.path.realpath(__file__)
#     print(file_path)
#     schema = model.schema_json(indent=2)
#     name = model.schema()["title"]
#     with open(RELATIVE_PATH_TO_JSON_SCHEMA_EXPORT_DIR + f"{name}.json", "w") as outfile:
#         for line in schema.splitlines():
#             outfile.writelines(line)
