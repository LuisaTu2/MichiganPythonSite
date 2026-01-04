import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import WelcomePage from "./components/pages/WelcomePage";
// import AboutPage from "./components/pages/AboutPage";
import TeamPage from "./components/pages/Team";
import EventsPage from "./components/pages/EventsPage";
import SponsorPage from "./components/pages/Sponsor";
import CodeConductPage from "./components/pages/CodeConduct";

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
          {page === 3 && <EventsPage />}
          {page === 4 && <SponsorPage />}
          {page === 5 && <CodeConductPage />}
        </>
      </div>
    </>
  );
};

export default App;
