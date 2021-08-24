export type Immutable<T> = {
  readonly [K in keyof T]: Immutable<T[K]>;
};

// TODO: Figure out which types to use.
export const runTypeCheck = (runType: any, data: any) => {
  try {
    runType(data);
  } catch (err) {
    console.log(
      "Type validation error. Is: ",
      data,
      "Should be: ",
      typeof runType
    );
  }
};

export * from "./gempy";
