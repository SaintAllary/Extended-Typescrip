// https://github.com/type-challenges/type-challenges/blob/master/questions/12-medium-chainable-options/README.md

export interface IChainable{
    option: <T extends string,V extends any>(key:T,value:V)=> this & {[key in T]: V}
    get: ()=>this
}

export declare const config: IChainable

 