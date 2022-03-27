// https://github.com/type-challenges/type-challenges/blob/master/questions/610-medium-camelcase/README.md

import { Dash } from '../common-types';

export type CamelCase<T> = T extends `${infer ST}${Dash}${infer ED}${infer R}`
  ? CamelCase<`${ST}${Uppercase<ED>}${R}`>
  : T;
