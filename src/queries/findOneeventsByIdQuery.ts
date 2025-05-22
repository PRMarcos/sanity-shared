import groq from "groq"

  
  export const findOneeventsByIdQuery = groq`
 *[_type == "event" && _id == $id][0] {
  title,
  about,
  shortDescription,
  "address": address->{
    title,
    street,
    city,
    state,
    zip
  },
  "banner": banner.asset->url,
  "bannerMobile": bannerMobile.asset->url,
  "eventColor": eventColor.hex,
  organizer {
    description,
    "phone": phone->{
      number,
      name
    },
    "email": email->{
      address,
      name
    }
  },
  "schedule": schedule[]{
    date,
    startTime,
    endTime,
    sessions[]{
      title,
      description,
      time
    }
  },
  "background": background.asset->url,
  "speakers": speakers[]->{
    name,
    birthDate,
    title,
    titleAbbreviation,
    bio,
    "image": photo.asset->url
  },
  teaser
}
`;

