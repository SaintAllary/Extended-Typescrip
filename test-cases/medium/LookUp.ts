import { LookUp } from "../../task-types/medium/LookUp";
import { ICat, IDog } from "../../test-data/test-types";

type MyDogType = LookUp<ICat | IDog, 'dog'> // expected to be `Dog`
type test = LookUp<{type: 'test'}, 'dog'> // expected to be `never`