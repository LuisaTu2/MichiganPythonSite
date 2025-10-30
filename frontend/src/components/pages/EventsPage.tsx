import "./EventsPage.css";
import { NEXT_EVENT } from "./utils";

const events = [
  NEXT_EVENT,
  {
    title: "Team Meeting",
    date: "Thursday Dec 6, 2025",
    time: "7:00PM - 8:00PM",
    location: "Washtenaw Community College · Ann Arbor, MI",
    address: "4800 E Huron River Dr, Ann Arbor, MI 48105, United States",
    description:
      "TBD: Discuss upcoming Python events and community initiatives.",
    speaker: {
      name: "tbd",
      bio: "Active member of the Michigan Python community.",
    },
    link: "https://www.meetup.com/michigan-python/events/308333441/",
  },
  {
    title: "❄️ Holiday Social ❄️",
    date: "Thursday Dec 18, 2025",
    time: "7:00PM - 8:00PM",
    location: "TBD",
    address: "Ann Arbor, MI 48105, United States",
    description: "Come celebrate another year of Python and talks!",
    // speaker: {
    //   name: "tbd",
    //   bio: "Active member of the Michigan Python community.",
    // },
    link: "https://www.meetup.com/michigan-python/events/308333441/",
  },
];

const EventsPage = () => {
  const openInMaps = (location: string) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location
    )}`;
    window.open(mapsUrl, "_blank");
  };
  return (
    <div className="events-page">
      <div className="events-page-content">
        We meet every first Thursday of the month. We offer both in person and
        virtual options. Come join us at our next event!
      </div>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={event.date.toString()} className="event-card">
            {index === 0 && (
              <span className="event-sticker">Coming Up Next!</span>
            )}
            <h3
              className="event-title"
              onClick={() => window.open(event.link, "_blank")}
            >
              {event.title}
            </h3>
            <p className="event-date">
              {event.date.toLocaleString()} | {event.time}
            </p>
            <p
              className="event-location"
              onClick={() => openInMaps(event.address)}
            >
              📍 <strong>{event.location}</strong>
            </p>
            <p
              className="event-online"
              onClick={() =>
                window.open(
                  "https://us02web.zoom.us/j/85410617119?pwd=NmxUcXFaUDlMNS9YMTdWc1hHTFZqQT09",
                  "_blank"
                )
              }
            >
              🎥 <strong>Join Online</strong>
            </p>
            <p className="event-description">{event.description}</p>
            {/* {event.speaker && (
              <p className="event-speaker">
                <strong>Speaker:</strong> {event.speaker.name} —{" "}
                {event.speaker.bio}
              </p>
            )} */}
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="event-link"
            >
              View Event on Meetup
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
