import { WhiteSpaceNT } from '../common-types';

export type TrimLeft<T extends string> = T extends `${WhiteSpaceNT}${infer P}`
  ? TrimLeft<P>
  : T;
