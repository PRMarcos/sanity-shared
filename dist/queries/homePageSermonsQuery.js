import groq from "groq";
export const homePageSermonsQuery = groq `
*[_type == "sermonSummary" && isActive == true ] | order(date desc)[0...5] {
      _id,
      title,
      date,
      "slug": slug.current,
      background,
      speaker->{ name, titleAbbreviation, photo}
      
    }
  `;
