import { Immutable } from "./index";

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
  idx: String,
  x: Number,
  y: Number,
  z: Number,
  x_uc_dist: DistUc,
  x_uc: Number,
  y_uc_dist: DistUc,
  y_uc: Number,
  z_uc_dist: DistUc,
  z_uc: Number,
  smooth: Number,
  formation: String,
});

// Create an immutable data type from subtype Record.
export type SurfacePoint = Immutable<Static<typeof SurfacePointRecord>>;

export const SurfacePointRunType = Union(Array(SurfacePointRecord), Undefined);

export interface GempySliceState {
  surfacePoints: SurfacePoint[];
}
