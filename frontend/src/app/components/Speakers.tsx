"use client";

import "./Speakers.css";

const speakersData = [
  {
    name: "John",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample14.jpg",
  },
  {
    name: "Kevin",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample14.jpg",
  },
  {
    name: "Kevin",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample14.jpg",
  },
  {
    name: "Kevin",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample14.jpg",
  },
  {
    name: "Kevin",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample14.jpg",
  },
  {
    name: "Kevin",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample14.jpg",
  },
  {
    name: "Kevin",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample14.jpg",
  },
  {
    name: "Kevin",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample14.jpg",
  },
  

];

export default function Speakers() {
  return (
    <div className="speakersList">
      {speakersData.map((speaker) => (
        <div className="speakerCard">
          <div className="speakerImage">
            <img src={speaker.image} alt={speaker.name} />
          </div>
          <p>{speaker.name}</p>
        </div>
      ))}
    </div>
  );
}
