import groq from "groq";
export const homePageSermonsQuery = groq `
*[_type == "sermonSummary"] | order(date desc)[0...5] {
      title,
      date,
      "slug": slug,
      "background": background.asset->url,
      speaker->{ name, titleAbbreviation, "photo":photo.asset->url}
      
    }
  `;
