import groq from "groq";
export const getSmedListQuery = groq `
 
*[_type == "smed"] | order(_createdAt desc) {
      _id,
      title,
      banner,
      bannerHorizontal,
      smedDescription,
      smedButton
    }
  `;
