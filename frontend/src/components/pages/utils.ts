import tm1 from "../../assets/tm1.png";
import tm2 from "../../assets/tm2.png";

// TODO: update event datetime, link and all info

export const NEXT_EVENT = {
  title: "Python → English → Code: Viewing LLMs as Information Compression",
  date: "Nov 6, 2025",
  time: "7:00PM - 8:00PM",
  location: "Cahoots · Ann Arbor, Michigan",
  address: "206 E Huron St, Ann Arbor, MI 48104, United States",
  description: `This talk proposes a new way to think about LLMs:
    as a compression-decompression pipeline. We "compress"
    complex Python logic into a compact natural language representation,
    and then use an LLM to "decompress" that information back into functional code. We explore how inherently "lossy" this compression is, look at what is "lost" in translation (syntax, variable names), and what is preserved (hopefully function, logic). Understanding this analogy can help us become more effective at using LLMs to write maintainable code`,
  speaker: {
    name: "Eric Humphrey",
    bio: "Python enthusiast and educator with 10+ years of experience in web development and data science.",
  },
  link: "https://www.meetup.com/michigan-python/events/308029438/",
};

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const NEXT_EVENT_DATE = new Date(NEXT_EVENT.date);
export const NEXT_EVENT_MONTH = monthNames[NEXT_EVENT_DATE.getMonth()];
export const NEXT_EVENT_DAY = NEXT_EVENT_DATE.getDate();
export const NEXT_EVENT_DAY_OF_WEEK = NEXT_EVENT_DATE.getDay();
const daysOfWeek = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const NEXT_EVENT_DAY_OF_WEEK_PRETTY =
  daysOfWeek[NEXT_EVENT_DAY_OF_WEEK - 1];

/* team members page */
export const TEAM_MEMBERS = [
  {
    firstName: "Dan",
    lastName: "Yeaw",
    photo: tm1,
    blurb: `At a Michigan Python event, you can expect to discuss: Python—Basic and
      advanced techniques, PEPs, new versions, implementations, etc. Web
      Development—Django, Flask, Pyramid, Requests, etc. Data Science —machine
      learning, neural networks, TensorFlow, etc. IoT—Raspberry Pi, Arduino,
      maker culture, etc.`,
    contact: "tm1@gmail.com",
  },
  {
    firstName: "Evan",
    lastName: "Stone",
    photo: tm2,
    blurb: `Plus anything else Python-related! Members of the Michigan Python
      community are open, considerate, and respectful. For more information,
      please see our Code of Conduct.`,
    contact: "tm2@gmail.com",
  },
];
