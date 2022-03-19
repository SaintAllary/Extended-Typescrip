import { WhiteSpaceNT } from "../common";

export type TrimLeft<T extends  string> = T extends `${WhiteSpaceNT}${infer P}`? TrimLeft<P>: T;

