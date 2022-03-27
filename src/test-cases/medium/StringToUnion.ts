import {
  StringToUnion,
  StringToUnion2,
} from '../../task-types/medium/StringToUnion';
import { NegativeNumberInString } from '../../test-data/test-types';

type Result = StringToUnion2<NegativeNumberInString>; // expected to be "-" | "1" | "2" | "3"
type Result1 = StringToUnion<NegativeNumberInString>; // expected to be "-" | "1" | "2" | "3"
