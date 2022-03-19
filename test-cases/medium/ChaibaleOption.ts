import { config } from "../../task-types/medium/ChainableOption";
import { IResult } from "../../test-data/test-types";

  const result: IResult = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

  const result2: IResult = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .get()
