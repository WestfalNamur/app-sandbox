/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Idx = string;
export type X = number;
export type Y = number;
export type Z = number;
/**
 * An enumeration.
 */
export type DistUcEnum = "normal" | "triangular" | "uniform";
export type XUc = number;
export type YUc = number;
export type ZUc = number;
export type Smooth = number;
export type Formation = string;

export interface Orientation {
  idx: Idx;
  x: X;
  y: Y;
  z: Z;
  x_uc_dist: DistUcEnum;
  x_uc: XUc;
  y_uc_dist: DistUcEnum;
  y_uc: YUc;
  z_uc_dist: DistUcEnum;
  z_uc: ZUc;
  smooth: Smooth;
  formation: Formation;
  [k: string]: unknown;
}