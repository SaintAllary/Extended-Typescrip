// https://github.com/type-challenges/type-challenges/blob/master/questions/62-medium-type-lookup/README.md

export type LookUp<T, K> = T extends { type: infer V }
  ? K extends V
    ? T
    : never
  : never;
