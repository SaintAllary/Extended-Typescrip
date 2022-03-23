import { LastOfArray } from "../../task-types/easy/LastOfArray";
import { ArrayOfAnyTypes, ArrayOfStringTypes } from "../../test-data/test-types";

type FirstOfTheSame = LastOfArray<ArrayOfStringTypes> //expected to be last type of array
type FirstOfDifferent = LastOfArray<ArrayOfAnyTypes> //expected to be last type of array