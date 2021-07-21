from pydantic import BaseModel


class Point(BaseModel):
    ix: int
    jy: int
    kz: int
    value: str
