import tm1 from "../../assets/tm1.png";
import tm2 from "../../assets/tm2.png";

// constants
export const MIPY_YOUTUBE_LINK = "https://www.youtube.com/@MichiganPython";
export const MIPY_MEETUP_LINK = "https://www.meetup.com/michigan-python/";
export const MIPY_DISCORD_LINK = "https://discord.com/invite/FzZyT3Srba/";

export const ZOOM_MEETING_LINK =
  "https://us02web.zoom.us/j/85410617119?pwd=NmxUcXFaUDlMNS9YMTdWc1hHTFZqQT09";

export const PYTHON_ANYWHERE_LINK = "https://www.pythonanywhere.com";

// events
export const NEXT_EVENT = {
  title: "TBD",
  date: "Thursday Jan 8, 2026",
  time: "7:00PM - 8:00PM",
  location: "Cahoots · Ann Arbor, Michigan",
  address: "206 E Huron St, Ann Arbor, MI 48104, United States",
  description: `
    TBD
  `,
  speaker: {
    name: "TBD",
    bio: "N/A",
  },
  link: "https://www.meetup.com/michigan-python/events/308469059/",
};

export const EVENTS = [
  NEXT_EVENT,
  {
    title: "Team Meeting",
    date: "Coming soon in 2026",
    time: "7:00PM - 8:00PM",
    location: "Washtenaw Community College · Ann Arbor, MI",
    address: "4800 E Huron River Dr, Ann Arbor, MI 48105, United States",
    description: "TBD: Celebration Time 🎉🎉🎉",
    speaker: {
      name: "tbd",
      bio: "Active member of the Michigan Python community.",
    },
    link: "",
  },
];

export const PAST_EVENTS = [
  {
    title: "Building Your First conda-forge Recipe",
    date: "Thursday Dec 11, 2025",
    time: "7:00PM - 8:00PM",
    location: "Washtenaw Community College · Ann Arbor, MI",
    address: "4800 E Huron River Dr, Ann Arbor, MI 48105, United States",
    description: `Ever wanted to use a library in your Python project only to discover
      it's not available? In this talk, we'll walk through the complete journey
      of packaging a native dependency for cross-platform use on conda-forge.
      \n\n Whether you're building desktop apps, scientific tools, or just curious about how package management works under the hood, you'll leave with practical skills for extending the conda-forge ecosystem.
      No prior Python or conda experience is necessary.
            `,
    speaker: {
      name: "Dan Yeaw",
      bio: "Founder of the Michigan Python community.",
    },
    link: "https://www.meetup.com/michigan-python/events/308333441/",
  },
  {
    title: "Python → English → Code: Viewing LLMs as Information Compression",
    date: "Thursday Nov 6, 2025",
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
  },
  // {
  //   title: "❄️ Holiday Social ❄️",
  //   date: "Thursday Dec 18, 2025",
  //   time: "7:00PM - 8:00PM",
  //   location: "TBD",
  //   address: "Ann Arbor, MI 48105, United States",
  //   description: "Come celebrate another year of Python and talks!",
  //   // speaker: {
  //   //   name: "tbd",
  //   //   bio: "Active member of the Michigan Python community.",
  //   // },
  //   link: "https://www.meetup.com/michigan-python/events/308333441/",
  // }
];

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
    blurb: `Dan Yeaw is a Sr. Engineering Manager for Open Source Software at Anaconda, 
    where he leads a team focused on improving the conda CLI's performance, 
    reliability, and user experience. For the last eight years, 
    he has contributed to open source projects, 
    including as a core developer for GNOME, BeeWare, and Gaphor, while helping build Michigan's Python community. 
    Dan brings a unique background having previously worked on Functional Safety at Ford Motor Company and as a Naval Officer.`,
    contact: "",
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
