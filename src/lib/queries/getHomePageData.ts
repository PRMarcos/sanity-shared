  
import groq from "groq"
import { sanityClient } from "../sanityClient"
import { HomePageQueryResult } from "src/types/sanity.types"


export async function getHomePageData():Promise<HomePageQueryResult> {
	const result = await sanityClient.fetch(homePageQuery)
	return result
}
  
  export const homePageQuery = groq`
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