// https://github.com/type-challenges/type-challenges/issues/7541

//interesting case 
//if you switch ED and ST in first condition of ternar 
//typescript will start think that this is infinitive loop
export type LengthOfString<T extends string,A extends string[] =[]> = T extends `${infer ST}${infer ED}`? 
LengthOfString<ED,[...A, ST]>
: A['length']


