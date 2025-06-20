import groq from "groq";
export const getResumedEventListQuery = groq `
  *[_type == "event" && isActive == true]{
    _id,  
    title,
    shortDescription,
    "address": address->title,
     schedule[] {
        date,
        sessions[]{
          starTime,
          endTime
        }
      },
    background,
    banner,
  }
`;
