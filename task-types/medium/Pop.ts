// https://github.com/type-challenges/type-challenges/blob/master/questions/16-medium-pop/README.md

export type Pop<T extends unknown[]> = T extends [...infer K,infer L]?  K: unknown



