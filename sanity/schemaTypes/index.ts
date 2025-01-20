// schemaTypes/index.ts
import { type SchemaTypeDefinition } from "sanity";
import { navbarType } from "./navbarType";
import { headerType } from "./headerType";
import { whyQoobissType } from "./whyQoobiss";
import { darkFeatureType } from "./dark-feature";
import { lightFeatureType } from "./light-feature";
import { faqType } from "./faq";
import { footerType } from "./footerType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navbarType,
    headerType,
    whyQoobissType,
    darkFeatureType,
    lightFeatureType,
    faqType,
    footerType,
  ],
};
