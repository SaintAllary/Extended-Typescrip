import { ReplaceAll } from '../../task-types/medium/ReplaceAll';

type replaced = ReplaceAll<'t y p e s', ' ', ''>; // expected to be 'types'
