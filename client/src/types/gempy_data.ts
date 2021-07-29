import {
  Number,
  String,
  Array,
  Record,
  Union,
  Undefined,
  Literal,
  Static,
} from "runtypes";

const DistUc = Union(
  Literal("normal"),
  Literal("triangular"),
  Literal("uniform")
);

const SurfacePointRecord = Record({
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
});

export type SurfacePoint = Static<typeof SurfacePointRecord>;
export const SurfacePointRunType = Union(Array(SurfacePointRecord), Undefined);
