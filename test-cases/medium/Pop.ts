import { Pop } from "../../task-types/medium/Pop"
import { ArrayOfAnyTypes, ArrayOfStringTypes } from "../../test-data/test-types"

type re1 = Pop<ArrayOfAnyTypes> 
type re2 = Pop<ArrayOfStringTypes> 