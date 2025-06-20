import groq from "groq";
export const sermonSummaryPageQuery = groq `
  *[_type == "sermonSummaryPage"][0]{
    _id,
    title,
    bannerImage,
  }`;
