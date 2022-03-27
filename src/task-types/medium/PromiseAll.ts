// https://github.com/type-challenges/type-challenges/blob/master/questions/20-medium-promise-all/README.md

//TODO Additional add recursive promise checking
export type PromiseAll<T extends Promise<unknown>[]> = [T[number] extends Promise<infer K>? K : T[number]]

 