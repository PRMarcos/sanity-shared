import groq from "groq";
export const eventPageQuery = groq `
  *[_type == "eventsPage"][0]{
    _id,
    title,
    bannerImage
  }`;
