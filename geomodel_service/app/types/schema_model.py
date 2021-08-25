# https://github.com/pandera-dev/pandera/issues/253#issuecomment-665338337


import pandera as pa
from pandera.typing import Series


class GpSeriesPa(pa.SchemaModel):  # type: ignore
    name: Series[str] = pa.Field()  # type: ignore
    isfault: Series[bool] = pa.Field()  # type: ignore
    order_series: Series[int] = pa.Field()  # type: ignore
