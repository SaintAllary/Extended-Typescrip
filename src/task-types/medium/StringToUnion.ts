// https://github.com/type-challenges/type-challenges/blob/master/questions/531-medium-string-to-union/README.md

export type StringToUnion<T> = T extends `${infer ST}${infer ED}`? ST | StringToUnion<ED> : never

// also as solution
export type StringToUnion2<T, V extends string[]=[]> = T extends `${infer ST}${infer ED}`? StringToUnion2<ED, [...V, ST]> : V[number]
