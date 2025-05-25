import groq from "groq";
export const getResumedEventListQuery = groq `
   *[_type == "event"]{
    _id,  
    title,
      shortDescription,
      "address":address->title,
      schedule[] {
        date,
        startTime,
        endTime
      },
      "background": background.asset->url,
  }
`;
