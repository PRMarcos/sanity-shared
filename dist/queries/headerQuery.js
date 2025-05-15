import groq from "groq";
export const headerQuery = groq `
  *[_type == "header"][0]{
    items[]{
      _id,
      label,
      link
    }
  }
`;
