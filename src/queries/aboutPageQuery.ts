import groq from "groq";

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    _id,
    title,
    bannerImage,
    leadership[]->{
      _id,
      name,
      birthDate,
      title,
      titleAbbreviation,
      bio,
      photo
    }
  }
`