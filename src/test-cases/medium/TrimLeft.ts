import { TrimLeft } from '../../task-types/medium/TrimLeft';
import { neededToTrimInTwoDirection } from '../../test-data/test-variables';

type test = TrimLeft<typeof neededToTrimInTwoDirection>; // expected to be trimmed (left)
