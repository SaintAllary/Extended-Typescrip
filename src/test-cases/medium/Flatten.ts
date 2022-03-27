import { Flatten } from '../../task-types/medium/Flatten';

type flatten = Flatten<[[3, 4], 1, {}, [[[[['asda']]]]]]>; // extected to be [all elements in the same lvl]
