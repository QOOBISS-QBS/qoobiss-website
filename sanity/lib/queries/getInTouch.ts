import { groq } from "next-sanity";

export const getInTouchQuery = groq`
  *[_type == "getInTouch"][0] {
    tag,
    whiteText,
    accentText
  }
`;
