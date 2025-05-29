import groq from "groq";

  export const homePageEventsQuery = groq`
*[_type == "homePage"][0].eventList[]->{
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
`