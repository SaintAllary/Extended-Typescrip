export type TestNestedType = {
    very:{
        very:{
            deep: string
        }
    }
}

export type ArrayOfStringTypes = ['firstString','secondString','thirdString']

export type ArrayOfAnyTypes = [{name:'asdfsadfas'},'thirdString',1]

export interface IResult {
  foo: number
  name: string
  bar: {
    value: string
  }
}

export interface ICat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

export interface IDog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}



