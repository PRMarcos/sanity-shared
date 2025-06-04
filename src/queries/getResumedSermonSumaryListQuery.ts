import groq from "groq"

  
  export const getResumedSermonSumaryListQuery = groq`
 *[_type == "sermonSummary" && isActive == true] {
   _id,   
   title,
   date,
  tags[]->{_id,title},
   "slug": slug.current,
   background,
   speaker->{ name, titleAbbreviation, photo},
    }
`;

