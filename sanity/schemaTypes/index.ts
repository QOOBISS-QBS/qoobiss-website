// schemaTypes/index.ts
import { type SchemaTypeDefinition } from "sanity";
import { navbarType } from "./navbarType";
import { headerType } from "./headerType";
import { whyQoobissType } from "./whyQoobiss";
import { darkFeatureType } from "./dark-feature";
import { lightFeatureType } from "./light-feature";
import { faqType } from "./faq";
import { footerType } from "./footerType";
import getInTouch from "./getInTouch";
import { productsType } from "./products/productsType";
import { originType } from "./products/originType";
import { originFeaturesType } from "./products/originFeaturesType";
import { ontraceType } from "./products/ontraceType";
import { ontraceFeaturesType } from "./products/ontraceFeaturesType";
import { omnicheckType } from "./products/omnicheckType";
import { omnicheckFeaturesType } from "./products/omnicheckFeaturesType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    navbarType,
    headerType,
    whyQoobissType,
    darkFeatureType,
    lightFeatureType,
    faqType,
    footerType,
    productsType,
    originType,
    originFeaturesType,
    ontraceType,
    ontraceFeaturesType,
    omnicheckType,
    omnicheckFeaturesType,
    getInTouch,
  ],
};
