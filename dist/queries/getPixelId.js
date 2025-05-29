import groq from "groq";
export const getPixelId = groq `*[_type == "siteSettings"][0]{ metaPixelId }`;
