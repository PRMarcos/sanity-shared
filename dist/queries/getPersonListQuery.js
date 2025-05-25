import groq from "groq";
export const getPersonListQuery = groq `
  *[_type == "person"]{
    _id,
    name,
    birthDate,
    title,
    titleAbbreviation,
    bio,
    "photo": photo.asset->url
  }
`;
