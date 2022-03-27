// https://github.com/type-challenges/type-challenges/blob/master/questions/110-medium-capitalize/README.md
export type MyCapitilize<T> = T extends `${infer Y}${infer K}`
  ? `${Uppercase<Y>}${K}`
  : T;
