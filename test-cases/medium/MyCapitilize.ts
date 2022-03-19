import { MyCapitilize } from "../../task-types/medium/MyCapitilize";

type capitalized = MyCapitilize<'hello world'> // expected to be 'Hello world'