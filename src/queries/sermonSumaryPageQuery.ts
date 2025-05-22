import groq from "groq"

  
  export const sermonSumaryPageQuery = groq`
 *[_type == "sermonSummary"] {
   _id,   
   title,
   date,
  tags[]->{_id,title},
   "slug": slug.current,
   "background": background.asset->url,
   speaker->{ name, titleAbbreviation, "photo":photo.asset->url},
   "allTags": *[_type == "sermonTag"] {_id,title}
    }
`;

