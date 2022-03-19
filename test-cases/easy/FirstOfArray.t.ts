import { FirstOfArray } from "../../task-types/easy/FirstOfArray";
import { ArrayOfAnyTypes, ArrayOfStringTypes } from "../../test-data/test-types";

type FirstOfTheSame = FirstOfArray<ArrayOfStringTypes>
type FirstOfDifferent = FirstOfArray<ArrayOfAnyTypes>