import groq from "groq";

  export const homePageEventsQuery = groq`
*[_type == "event" && schedule[0].date >= now()] | order(schedule[0].date asc)[0...3] {
    _id,  
    title,
      shortDescription,
      "address":address->title,
      schedule[0] {
        date,
        startTime,
        endTime
      },
      "background": background.asset->url
    }
`