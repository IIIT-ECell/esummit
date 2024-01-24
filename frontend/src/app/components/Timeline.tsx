"use client";

import "./Timeline.css";
import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <Chrono
      mode="VERTICAL_ALTERNATING"
      hideControls={true}
      theme={{
        primary: "var(--primary)",
        secondary: "black",
        cardBgColor: "var(--background)",
        titleColor: "var(--text)",
        titleColorActive: "var(--text)",
        cardTitleColor: "var(--text)",
        cardSubtitleColor: "var(--accent)",
      }}
      fontSizes={{
        title: "1.7rem",
        cardTitle: "2rem",
        cardSubtitle: "1rem",
      }}
      classNames={{
        cardTitle: "card-title",
      }}
      items={[
        {
          title: "May 1940",
          cardTitle: "Some Link",
          url: "http://google.com",
          cardSubtitle:
            "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
        },
        {
          title: "25 July 1940",
          cardTitle: "Some heading",
          cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
        },
        {
          title: "June 1941",
          cardTitle: "Some other event heading",
          cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
        },
      ]}
    />
  );
};

export default Timeline;
