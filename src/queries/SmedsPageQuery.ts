import groq from "groq";

  export const SmedsPageQuery = groq`
 
 *[_type == "ourSmedsPage"][0]{  
  title,
  bannerImage,
  description,
  conclusion,
}

  `