import { Trim } from '../../task-types/medium/Trim';

type trimed = Trim<'  Hello World      '>; // expected to be 'Hello World'
