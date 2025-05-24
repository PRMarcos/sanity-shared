import groq from "groq"
  export const getAllTagsQuery = groq`
  *[_type == "sermonTag"] {
  _id,
  title
  }
    
`;

