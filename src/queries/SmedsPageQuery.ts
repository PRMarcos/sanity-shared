import groq from "groq";

  export const SmedsPageQuery = groq`
 
 *[_type == "ourSmedsPage"][0]{  
  title,
  "bannerImage": bannerImage.asset->url,
  description,
  conclusion,
}

  `