import { FirstOfArray } from '../../task-types/easy/FirstOfArray';
import { ArrayOfAnyTypes, ArrayOfStringTypes } from '../../test-data/test-types';

type FirstOfTheSame = FirstOfArray<ArrayOfStringTypes> // expected to be first type of array
type FirstOfDifferent = FirstOfArray<ArrayOfAnyTypes> // expected to be first type of array