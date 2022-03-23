import { Replace } from "../../task-types/medium/Replace";

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'