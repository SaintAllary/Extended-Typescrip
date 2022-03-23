import { Pop } from "../../task-types/medium/Pop"
import { ArrayOfAnyTypes, ArrayOfStringTypes } from "../../test-data/test-types"

type re1 = Pop<ArrayOfAnyTypes> //expected to be poped from array type
type re2 = Pop<ArrayOfStringTypes> //expected to be poped from array type