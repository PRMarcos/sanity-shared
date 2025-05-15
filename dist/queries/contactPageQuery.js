import groq from "groq";
export const contactPageQuery = groq `
  *[_type == "contactPage"][0]{
    _id,
    title,
    "bannerImage": bannerImage.asset->url,
    description,
    address-> {
      street,
      number,
      district,
      city,
      state,
      zip
    },
    "phone": phone->number,
    "email": email->address,
    "DefaultSocial": DefaultSocial->socialUserName,
    "DefaultSocialLink": DefaultSocial->url,
    "whatsApp": WhatsPhone->number,

    AvailableHours
  }`;
