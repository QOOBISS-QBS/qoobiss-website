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
import partnerWithUs from "./partnerWithUs";
import { productsType } from "./products/productsType";
import { originType } from "./products/originType";
import { originFeaturesType } from "./products/originFeaturesType";
import { ontraceType } from "./products/ontraceType";
import { ontraceFeaturesType } from "./products/ontraceFeaturesType";
import { omnicheckType } from "./products/omnicheckType";
import { omnicheckFeaturesType } from "./products/omnicheckFeaturesType";
import { heroType } from "./about-us/heroType";
import { featureOneType } from "./about-us/featureOneType";
import { featureTwoType } from "./about-us/featureTwoType";
import { teamType } from "./about-us/teamType";
import securityAndCompliance from "./security-and-compliance/securityAndCompliance";
import { cookiesPolicySchema } from "./cookiesPolicy";
import { privacyPolicySchema } from "./privacyPolicy";
import { termsAndConditionsSchema } from "./termsPolicy";
import aboutUs from "./products/aboutUs";
import news from "./news";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    aboutUs,
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
    heroType,
    featureOneType,
    featureTwoType,
    teamType,
    securityAndCompliance,
    partnerWithUs,
    cookiesPolicySchema,
    privacyPolicySchema,
    termsAndConditionsSchema,
    news,
  ],
};
