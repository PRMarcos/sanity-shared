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
    "liveBannerImage": liveBannerImage.asset->url
  }
`;
