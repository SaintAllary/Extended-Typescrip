import { AppendToObject } from '../../task-types/medium/AppendToObject';
import { IResult } from '../../test-data/test-types';

type result = AppendToObject<IResult, 1, { DSADAS: 'asdas' }>; // expected to be {[newField]: newValue,...firstObject}
