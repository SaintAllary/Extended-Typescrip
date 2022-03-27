// https://github.com/type-challenges/type-challenges/blob/master/questions/527-medium-append-to-object/README.md

export type AppendToObject<T extends object,K extends number | string, V extends any> = {
    [key in (keyof T)| K]: key extends keyof T? T[key] :V ;
}
