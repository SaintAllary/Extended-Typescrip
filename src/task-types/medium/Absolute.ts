// https://github.com/type-challenges/type-challenges/blob/master/questions/529-medium-absolute/README.md

export type Absolute<T extends number |bigint | string> = `${T}` extends `${infer ST}${infer ED}`? ST extends '-' ? ED : T:T;

