// https://github.com/type-challenges/type-challenges/blob/master/questions/10-medium-tuple-to-union/README.md

export type TupleToUnion<T> = T extends unknown[]? T[number] :unknown 


