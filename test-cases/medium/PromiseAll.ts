import { PromiseAll } from "../../task-types/medium/PromiseAll";
import { promise1, promise2 } from "../../test-data/test-variables";

type test = PromiseAll<[typeof promise1, typeof promise2]>