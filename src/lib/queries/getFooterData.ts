import groq from "groq"
import { sanityClient } from "../sanityClient"
import { FooterQueryResult } from "src/types/sanity.types"


export async function getFooterData():Promise<FooterQueryResult> {
	const result = await sanityClient.fetch(footerQuery)
	return result
}

export const footerQuery = groq`*[_type == "footer"][0]{
    "logo":logo.asset->url,
    programmingTitle,
    programmingText,
    helpTitle,
    "helpPhone": helpPhone->number,
    locationTitle,
    socialLinks[]-> {
      "_key":_id,
      url,
      "plataform":type->title,
      "icon": type->icon.asset->url
      },
    address-> {
      street,
      number,
      district,
      city,
      state,
      zip
    },
    mapEmbedUrl,
  }`