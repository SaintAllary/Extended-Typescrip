import { DeepReadonly } from "../../task-types/easy/DeepReadonly"
import { TestNestedType } from "../../test-data/test-types"
import { nestedType } from "../../test-data/test-variables"

const tmpDeepReadonly : DeepReadonly<TestNestedType>= nestedType
const readonlyArray: DeepReadonly<TestNestedType[]> = [nestedType]
const doubleReadonlyArray: DeepReadonly<TestNestedType[][]> = [[nestedType]]
//TODO FIND SOLUTION FOR ITERALABLE
const deepMap: DeepReadonly<Map<string,TestNestedType>> = new Map([['1',nestedType]])

tmpDeepReadonly.test={} //expected to be with error
tmpDeepReadonly.test.on={}  //expected to be with error
tmpDeepReadonly.test.on.deepReadonly = ''  //expected to be with error
readonlyArray[0].test.on.deepReadonly = 'asdasd'  //expected to be with error
readonlyArray[0] = []  //expected to be with error
doubleReadonlyArray[0][0]= 1  //expected to be with error
doubleReadonlyArray[0][0].test= {}  //expected to be with error
