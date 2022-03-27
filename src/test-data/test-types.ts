import type {
  manyDimensionArray,
  negativeNumber,
  negativeNumberInString,
  readonlyString,
} from './test-variables';
import { Absolute } from '../task-types/medium/Absolute';

export type TestNestedType = {
  very: {
    very: {
      deep: string;
    };
  };
};

export type ArrayOfStringTypes = ['firstString', 'secondString', 'thirdString'];

export type ArrayOfAnyTypes = [{ name: 'asdfsadfas' }, 'thirdString', 1];

export interface IResult {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

export interface ICat {
  type: 'cat';
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal';
}

export interface IDog {
  type: 'dog';
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer';
  color: 'brown' | 'white' | 'black';
}

export type Fn = (a: number, b: string) => number;

export type ReadonlyStringType = typeof readonlyString;

export type ManyDimensionArray = Readonly<typeof manyDimensionArray>;

export type NegativeNumber = typeof negativeNumber;

export type NegativeNumberInString = typeof negativeNumberInString;

export type KebabCase = 'test-how-it-works';
