import {
  Number,
  String,
  Array,
  Record,
  Union,
  Undefined,
  Literal,
} from "runtypes";

export type DistUcEnum = "normal" | "triangular" | "uniform";

export interface SurfacePoint {
  idx: number;
  x_coord: number;
  y_coord: number;
  z_coord: number;
  x_coord_uc_dist: DistUcEnum;
  x_coord_uc: number;
  y_coord_uc_dist: DistUcEnum;
  y_coord_uc: number;
  z_coord_uc_dist: DistUcEnum;
  z_coord_uc: number;
  smooth: number;
  formation: string;
}

export interface GetSurfacePoints {
  data: SurfacePoint[];
  error: any;
  mutate: (
    data?: SurfacePoint[],
    shouldRevalidate?: boolean | undefined
  ) => Promise<any>;
}

const DistUc = Union(
  Literal("normal"),
  Literal("triangular"),
  Literal("uniform")
);

export const ResGetSurfacePoints = Union(
  Array(
    Record({
      idx: Number,
      x_coord: Number,
      y_coord: Number,
      z_coord: Number,
      x_coord_uc_dist: DistUc,
      x_coord_uc: Number,
      y_coord_uc_dist: DistUc,
      y_coord_uc: Number,
      z_coord_uc_dist: DistUc,
      z_coord_uc: Number,
      smooth: Number,
      formation: String,
    })
  ),
  Undefined
);
