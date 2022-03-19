import { WhiteSpaceNT } from "../common";
import { TrimLeft } from "./TrimLeft";

export type TrimRight<T extends  string> = T extends `${infer P}${WhiteSpaceNT}`? TrimRight<P>: T;
export type Trim<T extends  string> = TrimRight<TrimLeft<T>>