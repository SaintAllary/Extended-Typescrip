// https://github.com/type-challenges/type-challenges/blob/master/questions/191-medium-append-argument/README.md

export type AppendArgument<F, N extends unknown> = F extends (
  ...args: infer ARG
) => infer R
  ? (...nArg: [...ARG, N]) => R
  : never;
