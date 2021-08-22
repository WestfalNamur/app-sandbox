import { Immutable } from "./index";
export enum DistUcTs {
  "normal",
  "triangular",
  "uniform",
}

export interface SurfacePointTs {
  idx: string;
  x: number;
  y: number;
  z: number;
  x_uc_dist: DistUcTs;
  x_uc: number;
  y_uc_dist: DistUcTs;
  y_uc: number;
  z_uc_dist: DistUcTs;
  z_uc: number;
  smooth: number;
  formation: string;
}

// Create an immutable data type from interfaces;
export type SurfacePoint = Immutable<SurfacePointTs>;

export interface GempyDataState {
  surfacePoints: SurfacePoint[];
}
