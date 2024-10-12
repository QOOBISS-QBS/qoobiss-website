import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";

import { navbarType } from "./navbarType";
import { headerType } from "./headerType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, navbarType, headerType],
};
