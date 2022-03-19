import { DeepReadonly } from "../../task-types/easy/DeepReadonly"
import { TestNestedType } from "../../test-data/test-types"
import { nestedType } from "../../test-data/test-variables"

const tmpDeepReadonly : DeepReadonly<TestNestedType>= nestedType
const readonlyArray: DeepReadonly<TestNestedType[]> = [nestedType]
const doubleReadonlyArray: DeepReadonly<TestNestedType[][]> = [[nestedType]]
//TODO FIND SOLUTION FOR ITERALABLE
const deepMap: DeepReadonly<Map<string,TestNestedType>> = new Map([['1',nestedType]])

tmpDeepReadonly.test={}
tmpDeepReadonly.test.on={}
tmpDeepReadonly.test.on.deepReadonly = ''
readonlyArray[0].test.on.deepReadonly = 'asdasd'
readonlyArray[0] = []
doubleReadonlyArray[0][0]= 1
doubleReadonlyArray[0][0].test= {}
