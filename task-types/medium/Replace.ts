// https://github.com/type-challenges/type-challenges/blob/master/questions/116-medium-replace/README.md

export type Replace<T,V extends string,K extends string> = T extends `${infer ST}${V}${infer ED}`?`${ST}${K}${ED}`: never
 