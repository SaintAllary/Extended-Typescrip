import { Absolute } from '../../task-types/medium/Absolute';
import { NegativeNumber } from '../../test-data/test-types';

type Test = Absolute<NegativeNumber>;

type Test1 = Absolute<'-123123'>;
