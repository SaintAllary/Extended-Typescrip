// https://github.com/type-challenges/type-challenges/blob/master/questions/9-medium-deep-readonly/README.md

export type DeepReadonly<T> =
  // TODO FIND SOLUTION FOR ITERALABLE
  // T extends Iterable<unknown>?
  // Readonly<T[Iterator]>
  // :
  // arrays
  T extends unknown[]
    ? Readonly<DeepReadonly<T[number]>[]>
    : // objects
    T extends Record<string, unknown>
    ? {
        readonly [key in keyof T]: DeepReadonly<T[key]>;
      }
    : // primitives
      Readonly<T>;
