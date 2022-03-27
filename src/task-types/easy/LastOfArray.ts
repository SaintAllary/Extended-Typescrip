// https://github.com/type-challenges/type-challenges/blob/master/questions/15-medium-last/README.md

export type LastOfArray<T extends unknown[]> = T extends [...infer K, infer L]
  ? L
  : never;
