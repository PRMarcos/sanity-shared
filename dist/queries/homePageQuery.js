import groq from "groq";
export const homePageQuery = groq `
 *[_type == "homePage"][0]{
    heroHeadline,
    heroDescription,
    heroButtonTitle,
    heroButtonLink,
    "heroImage": heroImage.asset->url,
    dividerText,
    titleLive,
    descriptionLive,
    youtubeUrl,
    buttonLiveText,
    butonLiveLink,
    "liveBannerImage": liveBannerImage.asset->url,

    "events": *[_type == "event" && schedule[0].date >= now()] | order(schedule[0].date asc)[0...3] {
    _id,  
    title,
      shortDescription,
      "address":address->title,
      schedule[0] {
        date,
        startTime,
        endTime
      },
      "background": background.asset->url
    },

    "sermons": *[_type == "sermonSummary"] | order(date desc)[0...5] {
      title,
      date,
      "slug": slug,
      "background": background.asset->url,
      speaker->{ name, titleAbbreviation, "photo":photo.asset->url}
      
    },

    "smeds": *[_type == "smed"] | order(_createdAt desc) {
      title,
      "banner": banner.asset->url
    }
  }
`;
