import { LastOfArray } from "../../task-types/easy/LastOfArray";
import { ArrayOfAnyTypes, ArrayOfStringTypes } from "../../test-data/test-types";

type FirstOfTheSame = LastOfArray<ArrayOfStringTypes>
type FirstOfDifferent = LastOfArray<ArrayOfAnyTypes>