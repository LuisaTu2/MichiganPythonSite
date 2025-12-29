import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import WelcomePage from "./components/pages/WelcomePage";
// import AboutPage from "./components/pages/AboutPage";
import TeamPage from "./components/pages/Team";
import EventsPage from "./components/pages/EventsPage";
import SponsorPage from "./components/pages/Sponsor";

const App = () => {
  const [page, setPage] = useState<number>(0);
  return (
    <>
      <Menu setPage={setPage} />
      <div className="app">
        <Header onClick={() => setPage(0)} />
        <>
          {page === 0 && <WelcomePage setPage={setPage} />}
          {/* {page === 1 && <AboutPage />} */}
          {page === 2 && <TeamPage />}
          {page === 3 && <SponsorPage />}
          {page === 4 && <EventsPage />}
        </>
      </div>
    </>
  );
};

export default App;
