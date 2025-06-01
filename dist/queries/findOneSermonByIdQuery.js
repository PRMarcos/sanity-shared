import groq from "groq";
export const findOneSermonByIdQuery = groq `
*[_type == "sermonSummary" && _id == $id && isActive == true][0] {
 _id,
  title,
  date,
  "slug": slug.current,
  "background": background.asset->url,
  "speaker": speaker->{
    name,
    birthDate,
    title,
    titleAbbreviation,
    biography,
    "image": photo.asset->url
  },
  "tags": tags[]->{
    _id,
    title
  },
  "videoLink": videoUrl,
  content
}
`;
