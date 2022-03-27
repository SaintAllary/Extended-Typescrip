// https://github.com/type-challenges/type-challenges/blob/master/questions/119-medium-replaceall/README.md

export type ReplaceAll<T,K extends string, S extends string> = T extends `${infer ST}${K}${infer ED}`? ReplaceAll<`${ST}${S}${ED}`,K,S>: T
