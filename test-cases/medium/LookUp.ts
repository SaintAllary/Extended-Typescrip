import { ICat, IDog } from "../../test-data/test-types";

type LookUp<T ,K> = T extends {type: infer V}? K extends V? T:never : never;
type MyDogType = LookUp<ICat | IDog, 'dog'> // expected to be `Dog`
type test = LookUp<{type: 'test'}, 'dog'> // expected to be `never`