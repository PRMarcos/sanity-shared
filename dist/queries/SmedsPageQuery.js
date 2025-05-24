import groq from "groq";
export const SmedsPageQuery = groq `
 *[_type == "smed"] | order(_createdAt desc) {
      _id,
      title,
      "banner": banner.asset->url,
      smedDescription,
      smedButton
    }
  `;
