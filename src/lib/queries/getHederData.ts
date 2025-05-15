import groq from "groq"
import { sanityClient } from "../sanityClient"
import { HeaderQueryResult } from "src/types/sanity.types"


export async function getHederData():Promise<HeaderQueryResult> {
	const result = await sanityClient.fetch(headerQuery)
	return result
}

const headerQuery = groq`
  *[_type == "header"][0]{
    items[]{
      _id,
      label,
      link
    }
  }
`

