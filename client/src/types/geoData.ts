import { Number, String, Array, Record, Union, Undefined } from "runtypes";

export interface Point {
  ix: number;
  jy: number;
  kz: number;
  value: string;
}

export const ResGetPoints = Union(
  Array(
    Record({
      ix: Number,
      jy: Number,
      kz: Number,
      value: String,
    })
  ),
  Undefined
);

export interface GetPointsRes {
  data: Point[];
  error: any;
  mutate: (
    data?: Point[],
    shouldRevalidate?: boolean | undefined
  ) => Promise<any>;
}
