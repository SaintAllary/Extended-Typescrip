import { IChainable } from '../task-types/medium/ChainableOption';
import { TestNestedType } from './test-types';

export const nestedType: TestNestedType = {
  very: {
    very: {
      deep: '',
    },
  },
};

export const arrayOfTheSame = ['yes', 'no', 'i', 'do', 'not', 'know'];

export const arrayOfDifferent = ['yes', 3, 'i', 'do', 'not', 1];

declare const config: IChainable;

export const promise1 = Promise.resolve(3);
export const promise2 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

export const neededToTrimInTwoDirection = '  check   ';

export const readonlyArrayOfString = [
  'yes',
  '',
  'i',
  'do',
  'not',
  'wow',
] as const;

export const readonlyString = 'some string' as const;

export const manyDimensionArray = [[3, 4], 1, {}, [[[[['asda']]]]]] as const;

export const negativeNumber = -1213131;

export const negativeNumberInString = '-1231231';
