import groq from "groq"

export const footerQuery = groq`*[_type == "footer"][0]{
    logo,
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