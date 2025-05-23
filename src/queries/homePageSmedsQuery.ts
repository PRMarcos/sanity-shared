import groq from "groq";

  export const homePageSmedsQuery = groq`
 *[_type == "smed"] | order(_createdAt desc) {
      title,
      "banner": banner.asset->url
    }
  `