import groq from "groq";
export const findOneSermonBySlugQuery = groq `
*[_type == "sermonSummary" && slug.current == $slug && isActive == true][0] {
 _id,
  title,
  date,
  "slug": slug.current,
  background,
  "speaker": speaker->{
    name,
    birthDate,
    title,
    titleAbbreviation,
    biography,
    photo
  },
  "tags": tags[]->{
    _id,
    title
  },
  "videoLink": videoUrl,
  content
}
`;
