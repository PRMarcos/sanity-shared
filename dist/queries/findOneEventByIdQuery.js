import groq from "groq";
export const findOneEventByIdQuery = groq `
 *[_type == "event" && _id == $id && isActive == true][0] {
  title,
  subTitle,
  about,
  shortDescription,
  registrtionLink,
  "address": address->{
    title,
    street,
    city,
    state,
    zip
  },
  banner,
  bannerMobile,
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
  showDetailSchedule,
  "schedule": schedule[]{
    date,
    sessions[]{
      title,
      description,
      starTime,
      endTime
    }
  },
  background,
  "speakers": speakers[]->{
    name,
    birthDate,
    title,
    titleAbbreviation,
    bio,
    image
  },
  teaser
}
`;
