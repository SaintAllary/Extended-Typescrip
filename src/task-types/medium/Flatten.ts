// https://github.com/type-challenges/type-challenges/blob/master/questions/459-medium-flatten/README.md

export type Flatten<T extends unknown[], A extends unknown[] =[]>=
 T extends [infer F, ...infer R]? F extends unknown[]? Flatten<R, [...Flatten<F>, ...A]> : Flatten<R, [...A, F]>:A
