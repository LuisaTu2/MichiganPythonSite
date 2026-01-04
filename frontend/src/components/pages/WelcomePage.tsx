import PhotoCarousel from "./PhotoCarousel";
import "./WelcomePage.css";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";
import mipy2 from "../../assets/mipy2.mp4";
import mipy3 from "../../assets/mipy3.mp4";
import {
  MIPY_DISCORD_LINK,
  MIPY_MEETUP_LINK,
  MIPY_YOUTUBE_LINK,
  NEXT_EVENT,
  NEXT_EVENT_DATE,
  NEXT_EVENT_DAY,
  NEXT_EVENT_DAY_OF_WEEK_PRETTY,
  NEXT_EVENT_MONTH,
} from "./utils";
import { FaMeetup, FaDiscord, FaYoutube } from "react-icons/fa";

interface WelcomPageProps {
  setPage: (page: number) => void;
}

const WelcomePage = ({ setPage }: WelcomPageProps) => {
  const today = new Date();
  return (
    <div className="welcome-page">
      <br />
      <PhotoCarousel images={[photo1, photo2, photo3]} />
      <br />
      <div className="welcome-page-content">
        <div className="join-next-event">
          <h3>Join our next event</h3>
          <div
            className="next-event"
            onClick={() => window.open(NEXT_EVENT.link, "_blank")}
          >
            <div className="next-event-date">
              <div className="month">{NEXT_EVENT_MONTH}</div>
              <div className="day">{NEXT_EVENT_DAY}</div>
              <div className="weekday">{NEXT_EVENT_DAY_OF_WEEK_PRETTY}</div>
            </div>
            <div className="next-event-info">
              <h3 className="title">{NEXT_EVENT.title}</h3>
              <p className="location">
                {NEXT_EVENT.time} | {NEXT_EVENT.location}
              </p>
              {today < NEXT_EVENT_DATE ? (
                <p className="status">
                  Starts in{" "}
                  {Math.ceil(
                    Math.abs(NEXT_EVENT_DATE.getTime() - today.getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  days
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          Check out more of our events{" "}
          <span onClick={() => setPage(4)} style={{ cursor: "pointer" }}>
            <strong>here</strong>
          </span>
          .
        </div>
        <br />
        <h3> Welcome!</h3>
        Happy to have you here! The Michigan Python Users Group is a community
        of Python enthusiasts from all backgrounds, focused on learning,
        collaboration, and inspiration. Everyone is invited to participate, and
        you can explore recordings of past talks on our
        <span
          onClick={() => window.open(MIPY_YOUTUBE_LINK, "_blank")}
          style={{ cursor: "pointer" }}
        >
          <strong> YouTube </strong>
        </span>
        channel, where you can find a collection of our past talks.
        <div className="sample-videos">
          <>
            <p>
              {" "}
              For example, you can discover how to accelerate your data analysis
              with DuckDB:{" "}
            </p>
            <video
              className="sample-video"
              controls
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=9EL1AEXrybU",
                  "_blank"
                )
              }
            >
              <source src={mipy3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>

          <>
            <p>...or learn how packaging works with PyInstaller:</p>
            <video
              className="sample-video"
              controls
              onClick={() =>
                window.open(
                  "https://youtu.be/S_Bus_FNjpg?si=AIaTm41iEDmdPcRr",
                  "_blank"
                )
              }
            >
              <source src={mipy2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <a
                href={MIPY_MEETUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMeetup color="#ED1C40" title="Meetup" />{" "}
                <span className="get-involved-txt">Meetup</span>
              </a>
            </li>
            <li>
              <a
                href={MIPY_DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="get-involved-icon">
                  <FaDiscord color="#5865F2" title="Discord" />{" "}
                </span>
                <span className="get-involved-txt">Discord</span>
              </a>
            </li>
            <li>
              <a
                href={MIPY_YOUTUBE_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube color="#FF0000" title="YouTube" />{" "}
                <span className="get-involved-txt">YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
