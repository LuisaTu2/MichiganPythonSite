import "./EventsPage.css";
import { EVENTS, PAST_EVENTS, ZOOM_MEETING_LINK } from "./utils";

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
        We usually meet every first Thursday of the month. We offer both in
        person and virtual options. Come join us at our next event!
      </div>
      <div className="events-container">
        {EVENTS.map((event, index) => (
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
              onClick={() => window.open(ZOOM_MEETING_LINK, "_blank")}
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
      <div className="past-events-title">Past Events</div>

      <div className="events-container">
        {PAST_EVENTS.map((event) => (
          <div key={event.date.toString()} className="event-card past-event">
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
            {/* <p
              className="event-online"
              onClick={() => window.open(ZOOM_MEETING_LINK, "_blank")}
            >
              🎥 <strong>Join Online</strong>
            </p> */}
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
