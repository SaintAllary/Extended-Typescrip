import { Flatten } from "../../task-types/medium/Flatten";

type flatten = Flatten<[[3, 4],1, {}, [[[[['asda']]]]]]> // extected to be [1, 2, 3, 4, 5]