import groq from "groq";
export const homePageEventsQuery = groq `
*[_type == "event" && schedule[0].date >= now()] && isActive == true | order(schedule[0].date asc)[0...3] {
    _id,  
    title,
      shortDescription,
      "address":address->title,
      schedule[] {
        date,
        startTime,
        endTime
      },
      "background": background.asset->url
    }
`;
